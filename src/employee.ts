import { Person } from './person'
import { Town } from './town'
export class Employee extends Person {
    private _company: string
    private _salary: number
    private _cityWork: Town
    constructor(firstname:string,lastname:string,age:number,adress:string,cityBirth:Town,company:string,salary:number,cityWork:Town){
        super(firstname,lastname,age,adress,cityBirth)
        this._company = company
        this._salary = salary
        this._cityWork = cityWork
    }
    public get company():string{
        return this._company
    }
    public set company(company:string){
        this._company = company
    }
    public get salary():number{
        return this._salary
    }
    public set salary(salary:number){
        this._salary = salary
    }
    public get cityWork():Town{
        return this._cityWork
    }
    public set cityWork(cityWork:Town){
        this._cityWork = cityWork
    }
    public toString():string{
        return super.toString()+' | company:'+this._company+' | salary:'+this._salary+' | cityWork:[ '+this._cityWork+' ]'
    }
}
