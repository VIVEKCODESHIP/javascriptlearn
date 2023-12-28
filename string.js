// console.log(null >0)


// comparison and equality are diffrenct and they have different in syntax
// ===stritct check


// console.log("2"===2)


// some time it converts to 0 and some time null so avoid this type of comparison


// primitive (call by value)

 //7 types : String, Number, Boolean, null(ekdam khali) , undefined ,Symbol(to make value unique),bigint ,



// non primitive (refrence)
// array, objects,functions 

// null datatype gives object dataype

//  const outsideTemp = null
// let userEmail;
//  const id = Symbol ('123')
// const anotherId = Symbol ('123')

// console.log(id === anotherId);

//array
// const heros=['hero1',"hero2","hero3"];
// let myObj={
//     name:"vivek",
//     age:20,
// }
// const myFunction = function(){
//     console.log("hey");
// }

//stack (primitive) and heap (non-primitive)(gives refrence)

let UserOne ={
    email: "user@example.com",
    upi:"upi@ybl"
}
let userTwo = UserOne

userTwo.email= "vivek@gmail.com"
console.log(userTwo.email);
console.log(UserOne.email);

const name = "vivek"
const repoCount = 50
const gameName =new String('pubbbggg') 
console.log(name + repoCount+ " value");
console.log(`hello i am ${name.To}`); //string interpolation
console.log(gameName.__proto__);//return empty object
console.log(gameName.toUpperCase());

//charAt() kaunse index pe kaunsa character h
//indexOf() kaunsa character kaunse index pe h
//substring(startno , endno) to cut the string or devide
//slice() we can give negative values also then it will start with negative

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newString = "  vivek  "
console.log(newString.trim()) //trim remove white spaces

//replace (what we have to remove, replaced word)used for replacing
//include() checks weather that particular string or character is there in the string; it return true and false

// split() (seperator,limit)

const stringtoarray = new String('viv - ek - tiw - ari') 
console.log(stringtoarray.split('-'));