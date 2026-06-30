//function declaration
//function say(){
//    console.log("Normal declaration")
//}
//say()

//function expression
//let say=function hi(){
//    console.log("From function expression")
//}
//say()


//Anonymns function
//let say1=function(){
    //console.log("From Anonymns function")
//}
//say1()

//Arrow Function

//const square=(x)=>{
//    return x * x
//}
//const result=square(5)
//console.log(result)

//Arrow with object

let person={
    fn:'Dani',
    ln:'A',
    full:()=>{
        return person.fn + ' ' + person.ln
    }
}
console.log(person.full())