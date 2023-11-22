import axios from 'axios'

export const getDevices = async(id) =>{

    try{
        const respons = await axios.get('/device', {id})

        if(respons.status === 200){
            return { isGetted: true, respons }
        }
    }catch(error){
        console.log('Ошибка получения устройства: ', error)
        return { isGetted: false, error }
    }
}