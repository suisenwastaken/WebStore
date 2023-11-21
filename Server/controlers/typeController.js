import model from '../models/models.js'
import ApiError from '../error/apiError.js'

export async function post(req,res){
    const {name} = req.body;
    const type = await model.Type.create({name});
    return res.json(type);
}

export async function get(req,res){
    const allTypes = await model.Type.findAll();
    return res.json(allTypes);
}




