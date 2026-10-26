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