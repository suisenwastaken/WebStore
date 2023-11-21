import model from '../models/models.js'
import ApiError from '../error/apiError.js'

export async function post(req,res){
    const {name} = req.body;
    const brand = await model.Brand.create({name});
    return res.json(brand);
}

export async function get(req,res){
    const allBrands = await model.Brand.findAll();
    return res.json(allBrands);
}




