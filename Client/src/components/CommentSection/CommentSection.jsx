import { useContext, useEffect } from 'react'
import Comment from '../Comment/Comment'
import styles from './CommentSection.module.css'
import DevicePageContext from '../../storage/DevicePageContext'

const CommentSection = () => {
    const { deviceInfo } = useContext(DevicePageContext)
    return (
        <>
            <div className={styles.CommentBlock}>
                    {deviceInfo.comments?.map((e) => (
                        <Comment commentData={e} key={e.id} />
                    ))}
            </div>
        </>
    )
}

export default CommentSection
