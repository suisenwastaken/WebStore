import axios from 'axios'

export const getDevices = async() =>{

    try{
        const respons = await axios.get('/device')

        if(respons.status === 200){
            return { isGetted: true, respons }
        }
    }catch(error){
        console.log('Ошибка получения устройств: ', error)
        return { isGetted: false, error }
    }
}