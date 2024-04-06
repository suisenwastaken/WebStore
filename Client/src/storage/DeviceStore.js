import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: 'Смартфон' },
            { id: 2, name: 'Телевизор' },
        ]

        this._brands = [
            { id: 1, name: 'Apple' },
            { id: 2, name: 'Samsung' },
            { id: 3, name: 'Xiaomi' },
            { id: 4, name: 'LG' },
        ]

        this._device_chars = [
            { title: 'Брэнд', name: 'Apple' },
            { title: 'Модель', name: 'Macbook Pro' },
            { title: 'Экран', name: '13.3 Дюйма' },
            { title: 'Диск', name: '256 гб' },
            { title: 'Процессор', name: 'core i5' },
        ]

        this._comments = [
            {
                user: {
                    name: 'Иван',
                    ProfilePicURL:
                        'https://api.dicebear.com/8.x/initials/svg?seed=Иван',
                },
                id: 1,
                rate: 5,
                title: 'Мне все нравки',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus enim obcaecati expedita laboriosam? Optio officiis, eum nemo incidunt officia deleniti perferendis voluptatum corporis? Laborum nisi esse aperiam molestiae accusamus consequuntur nam consequatur, eaque deserunt culpa dignissimos quasi, assumenda quam tempore est nulla, ex quo corrupti! Pariatur necessitatibus libero voluptatum possimus itaque laborum vero nisi labore dolor error sit commodi veritatis facilis modi animi nostrum ex assumenda, in amet adipisci! Voluptas veniam eius ullam sequi possimus, eos, quibusdam eveniet velit inventore recusandae corrupti ad quos tenetur provident esse non rerum laudantium commodi aliquam fugit quaerat hic fugiat assumenda facilis. Quod, fuga?',
            },
            {
                user: {
                    name: 'Лена',
                    ProfilePicURL:
                        'https://api.dicebear.com/8.x/initials/svg?seed=Лена',
                },
                id: 2,
                rate: 4,
                title: 'Ну могло быть лучше',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus enim obcaecati expedita laboriosam? Optio officiis, eum nemo incidunt officia deleniti perferendis voluptatum corporis? Laborum nisi esse aperiam molestiae accusamus consequuntur nam consequatur, eaque deserunt culpa dignissimos quasi, assumenda quam tempore est nulla, ex quo corrupti! Pariatur necessitatibus libero voluptatum possimus itaque laborum vero nisi labore dolor error sit commodi veritatis facilis modi animi nostrum ex assumenda, in amet adipisci! Voluptas veniam eius ullam sequi possimus, eos, quibusdam eveniet velit inventore recusandae corrupti ad quos tenetur provident esse non rerum laudantium commodi aliquam fugit quaerat hic fugiat assumenda facilis. Quod, fuga?',
            },
            {
                user: {
                    name: 'Эльдар',
                    ProfilePicURL:
                        'https://api.dicebear.com/8.x/initials/svg?seed=Эльдар',
                },
                id: 3,
                rate: 2,
                title: 'Гавнооо',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus enim obcaecati expedita laboriosam? Optio officiis, eum nemo incidunt officia deleniti perferendis voluptatum corporis? Laborum nisi esse aperiam molestiae accusamus consequuntur nam consequatur, eaque deserunt culpa dignissimos quasi, assumenda quam tempore est nulla, ex quo corrupti! Pariatur necessitatibus libero voluptatum possimus itaque laborum vero nisi labore dolor error sit commodi veritatis facilis modi animi nostrum ex assumenda, in amet adipisci! Voluptas veniam eius ullam sequi possimus, eos, quibusdam eveniet velit inventore recusandae corrupti ad quos tenetur provident esse non rerum laudantium commodi aliquam fugit quaerat hic fugiat assumenda facilis. Quod, fuga?',
            },
        ]

        this._devices = [
            {
                id: 1,
                name: 'TV',
                price: 5000,
                salePercent: 12,
                rating: 0,
                img: 'b3c931b0-968f-413f-811a-8effb3213252.jpg',
                typeId: 2,
                brandId: 1,
                brand: 'Apple',
                type: 'Телевизор',
                device_chars: this._device_chars,
                comments: this._comments,
            },
            {
                id: 2,
                name: 'Iphone 12',
                price: 10000,
                rating: 7.5,
                img: '784f7350-e027-480b-b84f-c233a51df4cb.jpg',
                typeId: 1,
                brandId: 1,
                brand: 'Apple',
                type: 'Смартфон',
                device_chars: this._device_chars,
                comments: this._comments,
            },
            {
                id: 3,
                name: 'redmi note 7',
                price: 10000,
                rating: 0,
                img: '2bb48b6f-f6fa-4808-9773-2c42b77f9017.jpg',
                typeId: 1,
                brandId: 3,
                brand: 'Xiaomi',
                type: 'Смартфон',
                device_chars: this._device_chars,
                comments: this._comments,
            },
            {
                id: 4,
                name: 'galaxy note 7',
                price: 3000,
                rating: 0,
                img: '1bf3a707-552b-4940-9378-205e69af3217.jpg',
                typeId: 1,
                brandId: 2,
                brand: 'Samsung',
                type: 'Смартфон',
                device_chars: this._device_chars,
                comments: this._comments,
            },
            {
                id: 5,
                name: 'old',
                price: 500,
                rating: 0,
                img: 'c84a5717-34c3-4a98-8b78-9702f26bb0f9.jpg',
                typeId: 1,
                brandId: 4,
                brand: 'LG',
                type: 'Смартфон',
                device_chars: this._device_chars,
                comments: this._comments,
            },
        ]

        makeAutoObservable(this)
    }

    setTypes(type) {
        this._types = type
    }

    setBrands(brand) {
        this._brands = brand
    }

    setDevices(device) {
        this._devices = device
    }

    get types() {
        return JSON.parse(JSON.stringify(this._types))
    }

    get brands() {
        return JSON.parse(JSON.stringify(this._brands))
    }

    get devices() {
        return JSON.parse(JSON.stringify(this._devices))
    }
}
