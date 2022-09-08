// Write your code here
class Breakfast{
    constructor (food, drink){
        this.food = food;
        this.drink = drink;

    }
}
class Lunch {
    constructor(salad, soup, drink){
        this.salad =salad;
        this.soup = soup;
        this.drink = drink;

    }
}

class Dinner{
    constructor(salad, soup, entree, dessert) {
        this.salad = salad;
        this.soup =soup;
        this.entree = entree;
        this.dessert = dessert;
    }
}




















// class Cat{
//     constructor(name, breed, age){
//         this.name = name;
//         this.breed = breed;
//         this.age = age;
//         this.favFood = []
//         // console.log(this)
        
//     }
//      introduce (){
//             return `Hi my name is ${this.name}`
//         }
//         addFood(food){
//             this.favFood.push(food)
//         }
//         loopThroughFoods(){
//             console.log(this)
//             this.favFood.forEach(this.logFood)
//         //     this.favFood.forEach(
//         //     //Inside 
//         //     function(food){
//         //         console.log(`Hi my name is ${this.name} and I love to eat ${food}`)
//         //   }
//             }
//         let logFood = (food) => {
//        console.log(`Hi my name is ${this.name} and I love to eat ${food}`)
//             }
//         }
// let rose = new Cat('rose', 'domestic longHair', 9)
// let luke = new Cat('luke', 'domestic short hair', 3)
// // console.log(this.introduce())
// console.log(rose.introduce())
// rose.addFood("milk")
// rose.addFood("fish")
// rose.addFood("house plants")
// rose.addFood("brownies")
// console.log(rose.favFood)
// console.log(rose.loopThroughFoods())