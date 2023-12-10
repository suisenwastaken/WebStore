import {makeAutoObservable} from 'mobx'

export default class DeviceStore{

    constructor(){
        this._types = [
            {id: 1, name: "Смартфон"},
            {id: 2, name: "Телевизор"}
        ]

        this._brands = [
            {id: 1, name: "Apple"},
            {id: 2, name: "Samsung"},
            {id: 3, name: "Xiaomi"},
            {id: 4, name: "LG"}
        ]

        this._deviceInfo = [
            {title: 'Брэнд', name: 'Apple'},
            {title: 'Модель', name: 'Macbook Pro'},
            {title: 'Экран', name: '13.3 Дюйма'},
            {title: 'Диск', name: '256 гб'},
            {title: 'Процессор', name: 'core i5'},
        ]

        this._devices = [
            {id: 1, name: "TV", price: 5000, rating: 0, img: "b3c931b0-968f-413f-811a-8effb3213252.jpg", typeId: 2, brandId: 1, brand:'Apple', type: 'Телевизор', device_info: this._deviceInfo},
            {id: 2, name: "Iphone 12", price: 10000, rating: 7.5, img: "784f7350-e027-480b-b84f-c233a51df4cb.jpg", typeId: 1, brandId: 1, brand:'Apple', type: 'Смартфон', device_info: this._deviceInfo},
            {id: 3, name: "redmin note 7", price: 10000, rating: 0, img: "2bb48b6f-f6fa-4808-9773-2c42b77f9017.jpg", typeId: 1, brandId: 3, brand:'Xiaomi', type: 'Смартфон', device_info: this._deviceInfo},
            {id: 4, name: "galazy note 7", price: 3000, rating: 0, img: "1bf3a707-552b-4940-9378-205e69af3217.jpg", typeId: 1, brandId: 2, brand:'Samsung', type: 'Смартфон', device_info: this._deviceInfo},
            {id: 5, name: "old", price: 500, rating: 0, img: "c84a5717-34c3-4a98-8b78-9702f26bb0f9.jpg", typeId: 1, brandId: 4, brand:'LG', type: 'Смартфон', device_info: this._deviceInfo}
        ]
        makeAutoObservable(this);
    }

    setTypes(type){
        this._types = type;
    }

    setBrands(brand){
        this._brands = brand;
    }

    setDevices(device){
        this._devices = device;
    }

    get types(){
        return this._types;
    }
    
    get brands(){
        return this._brands;
    }

    get devices(){
        return this._devices;
    }
}
