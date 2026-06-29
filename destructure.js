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
//console.log(name,price,rest)
function Hi({name,price}){
    console.log(`My name is ${name} and i bought for ${price}` )
}
Hi(car)

