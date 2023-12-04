import axios from 'axios'
import DeviceStore from '../../storage/DeviceStore';

export const getDevices = async() =>{
    const a = new DeviceStore();
    return a.brands

    try{
        const respons = await axios.get('http://localhost:5500/api/brand')

        if(respons.status === 200){
            return respons.data.rows 
        }
    }catch(error){
        console.log('Ошибка получения устройств: ', error)
        return { isGetted: false, error }
    }
}