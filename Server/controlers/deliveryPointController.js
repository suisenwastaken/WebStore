import model from '../models/models.js'
import ApiError from '../error/apiError.js'

export async function post(req,res){
    const {name, address} = req.body;
    const type = await model.DeliveryPoint.create({name, address});
    return res.json(type);
}

export async function get(req,res){
    const allTypes = await model.DeliveryPoint.findAll();
    return res.json(allTypes);
}




