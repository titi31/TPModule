import { Town } from './town'
export class Capital extends Town {
    private _monument:string
    constructor(city:string,country:string,nbHabitants:number,monument:string){
        super(city,country,nbHabitants)
        this._monument = monument
    }
    public get monument():string{
        return this._monument
    }
    public set monument(monument:string){
        this._monument =monument
    }
    public toString(){
        return super.toString()+' | monument:'+this._monument
    }
}
