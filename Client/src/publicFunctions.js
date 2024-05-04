import { values } from 'mobx'

export const validatePrice = (price) => {
    const str = [...String(price)].reverse().join('')
    const finalStr = []
    for (let i = 0; i < str.length; i++) {
        if (i % 3 === 0 && i !== 0) finalStr.push(' ')
        finalStr.push(str[i])
    }
    return finalStr.reverse().join('')
}

export const AuthorizationTokenType = 'Bearer'

export const BrandEnum = [
    { id: 1, name: 'Apple', logo: '/brandLogos/appleLogo.png' },
    { id: 2, name: 'Samsung', logo: '/brandLogos/samsungLogo.png' },
    { id: 3, name: 'Xiaomi', logo: '/brandLogos/xiaomiLogo.png' },
    { id: 4, name: 'Sony', logo: '/brandLogos/sonyLogo.png' },
    { id: 5, name: 'Honor', logo: '/brandLogos/honorLogo.png' },
    { id: 6, name: 'Tefal', logo: '/brandLogos/tefalLogo.png' },
]

export const TypeEnum = [
    {
        name: 'Наушники',
        id: [1,2,3,4],
        values: [
            { id: 1, name: 'Беспроводные наушники' },
            { id: 2, name: 'Наушники TWS' },
            { id: 3, name: 'Наушники мониторы' },
            { id: 4, name: 'Наушники вкладыши' },
        ],
    },
    {
        name: 'Бытовая техника',
        id: [5,6,7,8],
        values: [
            { id: 5, name: 'Холодильники' },
            { id: 6, name: 'Стиральные машины' },
            { id: 7, name: 'Мультиварки' },
            { id: 8, name: 'Телевизоры' },
        ],
    },
    {
        name: 'Компьютеры',
        id: [9,10],
        values: [
            { id: 9, name: 'Системные блоки' },
            { id: 10, name: 'Моноблоки' },
        ],
    },
    {
        name: 'Телефоны',
        id: [11,12],
        values: [
            {id: 11, name: 'Смартфоны'},
            {id: 12, name: 'Кнопочные телефоны'}
        ]
    },
    {
        id: [13,14],
        name: 'Ноутбуки',
        values: [
            {id: 13, name: 'Сенсорные ноутбуки'},
            {id: 14, name: 'Ноутбуки'}
        ]
    },
]

export const getTypeName = (typeId) => {
    for (const category of TypeEnum) {
        const foundType = category?.values?.find((value) => value.id === typeId)
        if (foundType) {
            return foundType.name
        }
    }
    return ''
}

export const getBrandName = (brandId) => {
    return BrandEnum?.find((brand) => brand.id === brandId)?.name || ''
}

export const validateDate = (dateString) => {
    const months = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря',
    ]

    const date = new Date(dateString)
    const day = date.getDate()
    const monthIndex = date.getMonth()
    const month = months[monthIndex]

    return `${day} ${month}`
}
