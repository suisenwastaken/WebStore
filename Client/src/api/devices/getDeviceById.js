import axios from 'axios'
import DeviceStore from '../../storage/DeviceStore'

export const getDeviceById = async(id) =>{

    const device = new DeviceStore();
    return(device.devices.filter((d) =>{
        return d.id == id;
    })[0])

    try{
        const respons = await axios.get('http://localhost:5500/api/device/', {params: {id}})

        if(respons.status === 200){
            return { isGetted: true, respons }
        }
    }catch(error){
        console.log('Ошибка получения устройства: ', error)
        return { isGetted: false, error }
    }
}