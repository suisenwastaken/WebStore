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
}) => {
    let subClass = ''
    switch (type) {
        case 'lightNoBorder':
            subClass = styles.lightNoBorderButton
            break
        case 'light':
            subClass = styles.lightButton
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
            <div className={styles.text} style={pStyle}>
                {icon}
                {text}
            </div>
        </button>
    )
}

export default CustomButton
