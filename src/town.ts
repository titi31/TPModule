export class Town {
    private _city:string
    private _country: string
    private _nbHabitants:number
    constructor(city:string,country:string,nbHabitants:number){
        this._city = city
        this._country = country
        this._nbHabitants = nbHabitants
    }
    public get city():string{
        return this._city
    }
    public set city(city: string){
        this._city= city
    }
    public get country():string{
        return this._country
    }
    public set country(country:string){
        this._country = country
    }
    public get nbHabitants():number{
        return this._nbHabitants
    }
    public set nbHabitants(nbHabitants:number){
        if(nbHabitants<0){
            console.log('not number negatif')
        }else{
            this._nbHabitants = nbHabitants
        }
    }
    public toString():string{
        return 'city:'+this._city+' | country:'+this._country+' | nbHabitants:'+this._nbHabitants
    }
}
