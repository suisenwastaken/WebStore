import { useEffect, useState } from 'react'
import styles from './CustomSelect.module.css'
import './style.css'
import Select from 'react-select'

const CustomSelect = ({
    options,
    name,
    error,
    showError = true,
    placeholder,
    value,
    onChange,
}) => {
    const selectedOption = options?.find(option => option.value === value);

    return (
        <div className={styles.inputArea}>
            <Select
                name={name}
                options={options}
                classNamePrefix={'input'}
                className={error && styles.errorInput}
                placeholder={placeholder}
                isSearchable={false}
                value={selectedOption}
                onChange={onChange}
            />
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
    )
}

export default CustomSelect
