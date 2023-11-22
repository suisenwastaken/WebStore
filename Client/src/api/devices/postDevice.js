import axios from 'axios'

export const postDevices = async(name, price, brandId, typeId, img) =>{

    try{
        const respons = await axios.post('/device', {name, price, brandId, typeId, img})

        if(respons.status === 200){
            return { isPosted: true, respons }
        }
    }catch(error){
        console.log('Ошибка отправки устройства: ', error)
        return { isPosted: false, error }
    }
}