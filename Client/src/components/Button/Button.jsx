import styles from './Button.module.css'

const Button = ({ onClick, text, className, style, pStyle }) => {

    return (
        <button
            onClick={onClick}
            className={[styles.button, className].join(' ')}
            style={style}
        >
            <p className={styles.text} style={pStyle}>{text}</p>
        </button>
    )

}

export default Button