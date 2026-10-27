//primitive

//7 types:string,number,boolean,null,undefined,symbol,bigint
const score=100  //no need to defined the type like its number
const isLoggedIn=false //no need to tell that its boolean
const otsideTemp=null //when we check the datype of variable that has value"null" it will return "OBJECT"

const id=Symbol('123')
const anotherId=Symbol('123') //both are not same 
console.log(id===anotherId);//check 

//const bignumber=345667878674323464576879n  //it can big int


//refrence(non primitive)

//array,objects,function
const books=["never lie","teri deewani","ward D"]  //ARRAY

let myObj={
    name:"frieda",
    age:25
}       //object

const myfunction=function(){
    console.log("hello world");
}  //function
//all datatypes in non primitive mostly return object and function object for function

//to check
console.log(typeof myfunction);

//------------------------------------------------------------------------------------------------------------------------------
//memory 
//stack(primitive),heap(non-primitive)

let mynovel="rock paper scissors"

let mynovel2=mynovel
mynovel="hooked "
console.log(mynovel) //here it is stored acc to stack so the copy of value is made in stack 

let novel1={
    name:"twisted love",
    author:"ana haung"
}

let novel2=novel1

novel2.name="twisted games"
console.log(novel1)
console.log(novel2) //heap k andr refrence same hota h ,so dono change


//so stack me copy milti h ,original value same rehti h ,no change but heap me jo change hota h original value k andr hota h.