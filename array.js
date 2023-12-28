
// const myArr = [0,1,2,3,4,5]
// const myHeros =["shaktiman","naagrajan"]

// const myArr2= new Array(1, 2, 3, 4, 5)


// console.log(myArr2[1]);

// myArr.push(6) // use to push element in the last 

// myArr.pop(); // remove last value in the array

// myArr.unshift(0); // insert at the starting element 

// myArr.shift(); //remove element from the staring

// console.log(myArr.indexOf(9)) // if it does not exist then output will be -1

// const newArr= myArr.join() // make the array into string
// console.log(myArr)
// console.log(typeof newArr) 

// console.log(myArr.includes(2)); //in order to check weather its there of not

// =========== slice and splice =================================

// console.log("a",myArr);
// const myn1 = myArr.slice(0,3)


// console.log(myn1)
// console.log("b", myArr)

// const myn2 = myArr.splice(1, 3)



// console.log(myn2)
// console.log("c", myArr)
// slice dosenot manipulate the original array whereas splice manipulate the original array



const marvel =["thor","ironman","spiderman"]
 const dc =[ "superman","flash","batman"]



//  marvel.push(dc) //add array inside the array 
//  console.log(marvel[3][1]); 





// const allHero = marvel.concat(dc) //add the element the same array
// console.log(allHero)
// marvel.concat(dc)
// console.log(marvel);



const allnewArr = [...marvel, ...dc]; //spread operator use to join two array
console.log(allnewArr)



const newArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_anotherArray = newArray.flat(3) // use tomake all the array in one array and argument which we pass is  basically depth
console.log(real_anotherArray)


 console.log(Array.isArray("Hitesh")) // use to check weather the given value is array is not 

 console.log(Array.from("Hitesh")); //use to make array from any sort of values 
console.log(Array.from({name:"Hitesh"}));

let score1 = 100
let score2 =200
let score3 = 300

console.log(Array.of(score1,score2, score3)) // use to make the values of varaible to array 

