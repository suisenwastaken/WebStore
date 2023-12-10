export default {
    brands: {
        name: 'Бренды',
        values: [
            {
                name: 'Apple',
                logo: '/brandLogos/appleLogo.png',
            },
            {
                name: 'Samsung',
                logo: '/brandLogos/samsungLogo.png',
            },
            {
                name: 'Xiaomi',
                logo: '/brandLogos/xiaomiLogo.png',
            },
            {
                name: 'Sony',
                logo: '/brandLogos/sonyLogo.png',
            },
            {
                name: 'Honor',
                logo: '/brandLogos/honorLogo.png',
            },
            {
                name: 'Tefal',
                logo: '/brandLogos/tefalLogo.png',
            },
        ],
    },

    categories: {
        name: 'Категории',
        values: [
            {
                url: 'smartphones',
                name: 'Смартфоны',
                values: [
                    'Премиум смартфоны',
                    'Смартфоны Apple',
                    'Недорогие смартфоны',
                    'Смартфоны на Android',
                ],
            },
            {
                url: 'headphones',
                name: 'Наушники',
                values: [
                    'Бесппроводные наушники',
                    'Наушники TWS',
                    'Наушники мониторы',
                    'Наушники вкладыши',
                ],
            },
            {
                url: 'laptops',
                name: 'Ноутбуки',
                values: [
                    'Недорогие ноутбуки',
                    'Игровые ноутбуки',
                    'Ноутбуки Apple',
                ],
            },
            {
                url: 'pc',
                name: 'Компьютеры',
                values: ['Системные блоки', 'Моноблоки'],
            },
            {
                url: 'appliances',
                name: 'Бытовая техника',
                values: [
                    'Холодильники',
                    'Стиральные машины',
                    'Мультиварки',
                    'Телевизоры',
                ],
            },
        ],
    },
}
