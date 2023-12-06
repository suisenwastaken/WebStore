import axios from 'axios'

export const login = async (email, password) => {
    // return true;

    try {
        const response = await axios.post(
            'http://localhost:5500/api/user/login',
            { email, password }
        )

        if (response.status === 200) {
            console.log('логинюсь')
            return response
        }
    } catch (error) {
        console.log('Ошибка входа: ', error)
        return error
    }
}
