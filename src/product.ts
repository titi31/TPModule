export class Product {
    static _id:number = 0
    public id: number
    private _name:string
    private _description: string
    private _quantity: number
    private _price: number
    constructor(name:string,description:string,quantity:number,price:number){

        this.id= Product._id ++
        this._name = name
        this._description = description
        this._quantity= quantity
        this._price = price
    }
    public get name():string{
        return this._name
    }
    public set name(name:string){
        this._name = name
    }
    public get description():string{
        return this._description
    }
    public set description(description:string){
        this._description= description
    }
    public get quantity():number{
        return this._quantity
    }
    public set quantity(quantity:number){
        this._quantity = quantity
    }
    public get price():number{
        return this._price
    }
    public set price(price:number){
        this._price = price
    }
    public toString():string{
        return 'id:'+this.id+' | name:'+this._name+' | description:'+this._description+' | quantity:'+this._quantity+' | price:'+this._price
    }
}
