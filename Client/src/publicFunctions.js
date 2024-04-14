import { values } from "mobx"

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
    {id: 1, name: "Apple", logo: '/brandLogos/appleLogo.png',},
    {id: 2, name: "Samsung", logo: '/brandLogos/samsungLogo.png',},
    {id: 3, name: "Xiaomi", logo: '/brandLogos/xiaomiLogo.png',},
    {id: 4, name: "Sony", logo: '/brandLogos/sonyLogo.png',},
    {id: 5, name: "Honor", logo: '/brandLogos/honorLogo.png',},
    {id: 6, name: "Tefal", logo: '/brandLogos/tefalLogo.png',},
]

export const TypeEnum = [
    {
        id: 'smartphones',
        name: 'Смартфоны',
        values: [
            { id: 1, name: 'Премиум смартфоны' },
            { id: 2, name: 'Смартфоны Apple' },
            { id: 3, name: 'Недорогие смартфоны' },
            { id: 4, name: 'Смартфоны на Android' },
        ],
    },
    {
        id: 'headphones',
        name: 'Наушники',
        values: [
            { id: 5, name: 'Беспроводные наушники' },
            { id: 6, name: 'Наушники TWS' },
            { id: 7, name: 'Наушники мониторы' },
            { id: 8, name: 'Наушники вкладыши' },
        ],
    },
    {
        id: 'laptops',
        name: 'Ноутбуки',
        values: [
            { id: 9, name: 'Недорогие ноутбуки' },
            { id: 10, name: 'Игровые ноутбуки' },
            { id: 11, name: 'Ноутбуки Apple' },
        ],
    },
    {
        id: 'pc',
        name: 'Компьютеры',
        values: [
            { id: 12, name: 'Системные блоки' },
            { id: 13, name: 'Моноблоки' },
        ],
    },
    {
        id: 'appliances',
        name: 'Бытовая техника',
        values: [
            { id: 14, name: 'Холодильники' },
            { id: 15, name: 'Стиральные машины' },
            { id: 16, name: 'Мультиварки' },
            { id: 17, name: 'Телевизоры' },
        ],
    },
];
