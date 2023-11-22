import axios from 'axios'

export const postDevices = async(id, rate) =>{

    try{
        const respons = await axios.post('/device', {id, rate})

        if(respons.status === 200){
            return { isPosted: true, respons }
        }
    }catch(error){
        console.log('Ошибка отправки устройства: ', error)
        return { isPosted: false, error }
    }
}