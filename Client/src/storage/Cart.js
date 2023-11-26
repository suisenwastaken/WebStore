import { makeAutoObservable } from "mobx";

export default class Cart{
    constructor(){

        this._cartDevices = [];
        makeAutoObservable(this);
    }

    addDeviceToCart(device){
        this._cartDevices.push(device)
    }

    deleteDeviceFromCart(data){
        this._cartDevices.splice(data,1)
    }

    get cartDevices(){
        return this._cartDevices;
    }

    get cartCount(){
        return this._cartDevices.length;
    }

}