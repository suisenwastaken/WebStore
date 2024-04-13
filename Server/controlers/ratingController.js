import model from '../models/models.js'
import ApiError from '../error/apiError.js'

export async function postRate(req,res){
    const {id: deviceId} = req.params;
    const {rate, title, description} = req.body;
    const userId = req.user.id;
    let candidate = await model.Comment.findOne({where: {deviceId, userId}});

    const countOfRatings = await model.Comment.count({where: {deviceId}});
    const device = await model.Device.findOne({where: {id: deviceId}});
    let newRating;
    if(!candidate){
        candidate = await model.Comment.create({deviceId, rate, userId, title, description});
        newRating = (device.rating * countOfRatings + rate) / (countOfRatings + 1);
    }else{
        await model.Comment.update({rate: rate, title: title, description: description}, {where: {deviceId, userId}})
        newRating = (device.rating * countOfRatings - candidate.rate + rate) / countOfRatings;
    }
    await model.Device.update({rating: newRating}, {where: {id: deviceId}});
    
    return res.json(candidate);
}

export async function get(req,res){
    const {deviceId, userId} = req.query;
    let allRatings;
    if(!userId){
        allRatings = await model.Rating.findAndCountAll({where: {deviceId}});
    }else{
        allRatings = await model.Rating.findOne({where: {deviceId, userId}});
    }

    return res.json(allRatings);
}



