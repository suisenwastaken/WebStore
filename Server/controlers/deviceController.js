import {v4} from 'uuid'
import path from 'path'
import model from '../models/models.js'
import ApiError from '../error/apiError.js';

export async function post(req,res, next){

    try {
        const {name, price, brandId, typeId, info} = req.body;
        const {img} = req.files;
        let fileName = v4() + '.jpg';
        const __dirname = path.resolve();
        img.mv(path.resolve(__dirname, '.', 'static', fileName));
        
        const device = await model.Device.create({name, price, brandId, typeId, info, img: fileName})

        if(info){
            info = JSON.parse(info);
            info.forEach(e => {
                model.DeviceInfo.create({
                    title: e.title,
                    description: e.description,
                    deviceId: device.id
                })
            });
        }
    
        return res.json(device);

    } catch (error) {
        next(ApiError.badRequest(error.message))
    }
}

export async function get(req,res){
    let {brandId, typeId, page, limit} = req.query;

    page = page ?? 1;
    limit = limit ?? 10;
    let offset = page * limit - limit
    let devices;

    if(!brandId && !typeId){
        devices = await model.Device.findAndCountAll({limit, offset});
    }

    if(!brandId && typeId){
        devices = await model.Device.findAndCountAll({where: {typeId, limit, offset}});
    }
    
    if(brandId && !typeId){
        devices = await model.Device.findAndCountAll({where: {brandId, limit, offset}});
    }

    if(brandId && typeId){
        devices = await model.Device.findAndCountAll({where: {brandId, typeId, limit, offset}});
    }   

    return res.json(devices);
}

export async function getById(req,res){
    const {id} = req.params;
    const device = await model.Device.findOne(
        {
            where:{id},
            include: [{model: model.DeviceInfo, as: 'info'}],
            where: {id},
            include: [{model: model.Rating, as: 'ratings'}]
        });

    return res.json(device);
}



