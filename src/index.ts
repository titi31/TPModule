import { Person } from './person'
import { Town } from './town'
import { Capital } from './capital'
import { Employee } from './employee'
import { Product } from './product'
const name: string = "FuseBox";
console.log(name);
const toulouse:Town = new Town('toulouse','france',300)
const hamburg:Town = new Town('Hamburg','deutsh',3000)
const newYork: Capital = new Capital('New York','usa',30000,'Status Liberty')
const losAngeles: Town = new Town('Los Angeles','usa',2000)
console.log(toulouse.toString(),'\n ',hamburg.toString())
const titi:Person = new Person('tim','laude',24,'1 bis de la colombe',hamburg)
const julien:Person = new Person('julien','chedotal',27,'canal du midi',toulouse)
const paris: Capital =new Capital('paris','france',4000,'tour effeil')
const amandine: Person = new Person('Amandine','Caysac',20,'montauban',paris)
const MarkF: Employee = new Employee('mark','zuckerberg',40,'1 bis street york',newYork,'Facebook',70000,losAngeles)
console.log(julien.toString(),'\n ',titi.toString(),'\n ',amandine.toString(),MarkF.toString())
const pc: Product = new Product('hp','very good',3,500)
const collier: Product = new Product('collier','very beautiful',7,20)
let products: Product[] = [pc.toString(),collier.toString()]
document.getElementById('product').addEventListener('click',
function ():void{
    document.getElementById('liste').innerHTML=''
    products.forEach((product,index) => {
        document.getElementById('liste').innerHTML+=product+'<br>'

    })
}
document.getElementById('add').addEventListener('click', function addProducts(){
        const name: string = prompt('name of product ?')
        const description: string = prompt('description')
        const price: number = Number(prompt('price'))
        const quantity: number = Number(prompt('quantity'))
        products.push(new Product(name,description,quantity,price)
        document.getElementById('liste').innerHTML=''
}
)
