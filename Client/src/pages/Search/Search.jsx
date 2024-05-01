import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import styles from './Search.module.css'
import { useEffect, useState } from 'react'
import { DEVICE_URL } from '../../api/Urls'
import { GET, Request } from '../../api/APIFile'
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent'
import Card from '../../components/Card/Card'
import { devicePageURL } from '../../hoc/routerLinks'

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [loading, setLoading] = useState(false)
    const [devices, setDevices] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        const getDevices = async () => {
            setLoading(true)
            try {
                const params = {
                    brandId: searchParams.has('brandId')
                        ? searchParams.get('brandId')
                        : undefined,
                    typeId: searchParams.has('typeId')
                        ? searchParams.get('typeId')
                        : undefined,
                    search: searchParams.has('search')
                        ? searchParams.get('search')
                        : undefined,
                }

                Object.keys(params).forEach(
                    (key) => params[key] === undefined && delete params[key]
                )

                const deviceResponse = await Request.send({
                    method: GET,
                    url: DEVICE_URL,
                    useToken: true,
                    params: params,
                })
                if (deviceResponse) {
                    setDevices(deviceResponse.data.rows)
                }
                setLoading(false)
            } catch {
                setLoading(false)
            }
        }
        getDevices()
    }, [searchParams])

    return (
        <div className={styles.Page}>
            <div className={styles.LeftNav}></div>
            {loading ? (
                <LoadingComponent />
            ) : (
                <div className={styles.CardSection}>
                    {devices?.map((device, key) => (
                        <Card device={device} key={key} onClick={() => navigate(devicePageURL + device.id)} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Search
