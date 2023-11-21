import styles from './Button.module.css'

const Button = ({ onClick, text, className }) => {

    return (
        <button
            onClick={onClick}
            className={[styles.button, className].join(' ')}
        >
            <p className={styles.text}>{text}</p>
        </button>
    )

}

export default Button