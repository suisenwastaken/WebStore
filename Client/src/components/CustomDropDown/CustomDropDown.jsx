import { useState } from 'react'
import styles from './CustomDropDown.module.css'
import { BiChevronDown } from 'react-icons/bi'
import { BiChevronRight } from 'react-icons/bi'
const CustomDropDown = ({
    children,
    title,
    TitleRowStyle,
    style,
    childrenStyle,
}) => {
    const [isDropDown, setIsDropDown] = useState(false)
    return (
        <div className={styles.DropDown} style={style}>
            <div
                className={styles.TitleRow}
                onClick={() => setIsDropDown(!isDropDown)}
                style={TitleRowStyle}
            >
                <div className={styles.TitleText}>{title}</div>
                <div className={styles.DropDownButton}>
                    {isDropDown ? <BiChevronDown /> : <BiChevronRight />}
                </div>
            </div>
            {isDropDown ? (
                <div className={styles.Children} style={childrenStyle}>
                    {children}
                </div>
            ) : null}
        </div>
    )
}

export default CustomDropDown
