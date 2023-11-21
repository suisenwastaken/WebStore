import model from '../models/models.js'
import ApiError from '../error/apiError.js'

export async function post(req,res){
    const userId = req.user.id;
    const {deviceId} = req.body;
    const basketDevice = await model.BasketDevice.create({userId, deviceId});
    return res.json(basketDevice);
}

export async function get(req,res){
    // return res.json(req.user)
    const userId = req.user.id;
    const basketDevice = await model.BasketDevice.findAll({where: {userId}});
    let devices = [];

    for(const e of basketDevice){
        devices.push(await model.Device.findOne({where: {id: e.deviceId}}));
    }

    return res.json({devices});
}




