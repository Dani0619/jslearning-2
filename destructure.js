let car={
  name:'Nexon',
  driveTrain:'petrol,ev,diesel',
  price:20,
  brand:'Tata',

  onRoad(){
    return this.price += 2
  }
}
const {name,price,...rest}=car
console.log(name,price,rest)