import styles from './CustomTextArea.module.css'

const CustomTextArea = ({style, placeHolder, onChange, value, disabled, error, showError, name}) => {
    return (
        <>
            <div className={styles.inputArea}>
                <textarea
                    name={name}
                    style={style}
                    className={[styles.input, error && styles.errorInput].join(" ")}
                    placeholder={placeHolder}
                    onChange={onChange}
                    value={value}
                    disabled={disabled}
                    rows={3}
                    maxLength={255}
                >
                </textarea>
                <div className={styles.error}
                    style={error && showError ? {display: 'flex'} : {display: 'none'}}
                >
                    <div className={styles.errorText}>{error}</div>
                </div>
            </div>
        </>
    )
}

export default CustomTextArea
