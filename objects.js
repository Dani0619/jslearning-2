//objects declarations
let car={
  name:'Nexon',
  driveTrain:'petrol,ev,diesel',
  price:20,
  brand:'Tata',

  onRoad(){
    return this.price += 2
  }
};
console.log(car)
//select specifically
console.log(car.price)
//to addproperty
car['Model']=2024
console.log(car)
//to update
car.Model=2025
console.log(car)
console.log(car.onRoad())
