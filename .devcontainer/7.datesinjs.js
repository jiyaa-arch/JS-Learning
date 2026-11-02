//dates

let myDate=new Date()
console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());
console.log(typeof myDate);

let CreatedDate =new Date(2026,9,31)
//let myCreatedDate = new Date(2026,9,31,5,3)
let myCreatedDate = new Date("01-14-2026")

console.log(myCreatedDate.toLocaleString());
let myTimeStamp=Date.now()
console.log(myTimeStamp);

let newDate= new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
newDate.toLocalString('default',{
    weekday:"long",
})

