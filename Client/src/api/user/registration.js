import axios from 'axios'

export const registration = async (name, email, password) => {
    // return true
    try {
        const response = await axios.post(
            'http://localhost:5500/api/user/registration',
            { email, password }
        )

        if (response.status === 200) {
            console.log('регаюсь')
            return response
        }
    } catch (error) {
        console.log('Ошибка регистрации: ', error)
        return error
    }
}
