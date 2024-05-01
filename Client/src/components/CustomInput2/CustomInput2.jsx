import { useState } from 'react'
import CustomButton from '../CustomButton'
import styles from './CustomInput2.module.css'

const CustomInput2 = ({
    name,
    style,
    type,
    placeHolder,
    onChange,
    value,
    disabled,
    error,
    showError = true,
    checked,
    onClick,
    buttonText,
    buttonStyle,
}) => {
    return (
        <>
            <div className={styles.inputArea}>
                <div className={styles.inputRow}>
                    <input
                        name={name}
                        style={style}
                        className={[
                            styles.input,
                            error && styles.errorInput,
                        ].join(' ')}
                        type={type}
                        placeholder={placeHolder}
                        onChange={onChange}
                        value={value}
                        disabled={disabled}
                        checked={checked}
                        autoComplete="off"
                        maxLength={255}
                    />
                    <button
                        style={buttonStyle}
                        className={[
                            styles.button,
                            error && styles.errorButton,
                        ].join(' ')}
                        onClick={onClick}
                        disabled={disabled}
                    >
                        <div className={styles.buttonText}>{buttonText}</div>
                    </button>
                </div>
                <div
                    className={styles.error}
                    style={
                        error && showError
                            ? { display: 'flex' }
                            : { display: 'none' }
                    }
                >
                    <div className={styles.errorText}>{error}</div>
                </div>
            </div>
        </>
    )
}

export default CustomInput2
