import axios from 'axios'

export const registration = async(email, password) =>{

    try{
        const respons = await axios.post('/user/login', {email, password})

        if(respons.status === 200){
            return { isPosted: true, respons }
        }
    }catch(error){
        console.log('Ошибка входа: ', error)
        return { isPosted: false, error }
    }
}