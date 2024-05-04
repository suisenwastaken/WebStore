import styles from './CustomInput.module.css'

const CustomInput = ({ name, style, type, placeHolder, onChange, value, disabled, error, showError = true, checked, className}) => {
    return (
        <>
            <div className={[styles.inputArea, className].join(" ")}>
                <input
                    name={name}
                    style={style}
                    className={[styles.input, error && styles.errorInput].join(" ")}
                    type={type}
                    placeholder={placeHolder}
                    onChange={(e) => onChange(name, e.target.value)}
                    value={value}
                    disabled={disabled}
                    checked={checked}
                    maxLength={255}
                >
                </input>
                <div className={styles.error}
                    style={error && showError ? {display: 'flex'} : {display: 'none'}}
                >
                    <div className={styles.errorText}>{error}</div>
                </div>
            </div>
        </>
    )
}

export default CustomInput
