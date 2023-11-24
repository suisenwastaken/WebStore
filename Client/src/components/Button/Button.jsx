import styles from './Button.module.css'

const Button = ({ onClick, text, className, style }) => {

    return (
        <button
            onClick={onClick}
            className={[styles.button, className].join(' ')}
            style={style}
        >
            <p className={styles.text}>{text}</p>
        </button>
    )

}

export default Button