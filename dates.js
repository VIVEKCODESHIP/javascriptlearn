let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(typeof myDate)
// let myCreatedDate = new Date(2024, 0 ,2)
// console.log(myCreatedDate.toDateString())


let myTimeStamp = Date.now()
console.log(Date.now()/1000); //to print in secods

let newDate= new Date()
console.log(newDate);
console.log(newDate.getMonth());

newDate.toLocaleString('default',{
    weekday:"long"
});