import { Town } from './town'
export class Person {
    private _firstname:string
    private _lastname:string
    private _age:number
    private _adress:string
    private _cityBirth: Town
    constructor(firstname:string,lastname:string,age:number,adress:string,cityBirth:Town){
        this._firstname=firstname
        this._lastname = lastname
        this._age = age
        this._adress = adress
        this._cityBirth = cityBirth
    }
    public get firstname():string{
        return this._firstname
    }
    public set firstname(firstname:string){
        this._firstname= firstname
    }
    public get lastname():string{
        return this._lastname
    }
    public set lastname(lastname:string){
        this._lastname = lastname
    }
    public get age():number{
        return this._age
    }
    public set age(age:number){
        this._age = age
    }
    public get adress():string{
        return this._adress
    }
    public set adress(adress:string){
        this._adress = adress
    }
    public get cityBirth():Town{
        return this._cityBirth
    }
    public set cityBirth(cityBirth:Town){
        this._cityBirth = cityBirth
    }
    public toString():string{
        return 'firstname:'+this._firstname+' | lastname:'+this._lastname+' | age:'+this.age+' | adress:'+this._adress+' | cityBirth:[ '+this._cityBirth.toString() + ' ]'
    }
}
