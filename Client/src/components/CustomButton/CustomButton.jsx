import styles from './CustomButton.module.css'

const CustomButton = ({
    className,
    style,
    onClick,
    text,
    icon,
    pStyle,
    disabled,
    type,
    pClassName,
}) => {
    let subClass = ''
    switch (type) {
        case 'lightNoBorder':
            subClass = styles.lightNoBorderButton
            break
        case 'light':
            subClass = styles.lightButton
            break
        case 'defaultNoBorder':
            subClass = styles.defaultNoBorderButton
            break
        case 'transparentGray':
            subClass = styles.transparentGray
            break
        case 'transparentPurple':
            subClass = styles.transparentPurple
            break
        case 'lightRed':
            subClass = styles.lightRed
            break
        default:
            subClass = ''
            break
    }
    return (
        <button
            onClick={onClick}
            className={[styles.button, className, subClass].join(' ')}
            style={style}
            disabled={disabled}
        >
            <div className={[styles.text, pClassName].join(' ')} style={pStyle}>
                {icon}
                {text}
            </div>
        </button>
    )
}

export default CustomButton
