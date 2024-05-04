    import styles from './CustomCheckBox.module.css'

    const CustomCheckBox = ({ label, value, onClick, checked, style }) => {
        return (
            <div className={styles.CheckBoxBlock} style={style}>
                <input
                    type='checkbox'
                    checked={checked}
                    onChange={onClick}
                    value={value}
                    className={styles.CheckBox}
                />
                <div className={styles.Label} onClick={onClick}>{label}</div>
            </div>
        )
    }

    export default CustomCheckBox
