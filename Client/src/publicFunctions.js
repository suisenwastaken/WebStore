export const validatePrice = (price) => {
    const str = [...String(price)].reverse().join('')
    const finalStr = []
    for (let i = 0; i < str.length; i++) {
        if (i % 3 === 0 && i !== 0) finalStr.push(' ')
        finalStr.push(str[i])
    }
    return finalStr.reverse().join('')
}