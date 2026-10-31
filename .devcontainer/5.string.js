const name="alice"
const repocount=56

//console.log(name+ repocount+" value")  //it is old method but can be use to concate the strings

//concatenation-string interposition

console.log(`hello my name is ${name} and my repo count is ${repocount}`)
const gamename=new String("alimia"); //string declare
console.log(gamename[0])
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2)); //find character at some position
console.log(gamename.indexOf('a'));

const newstring=gamename.substring(0,4)
console.log(newstring)

const anotherString=gamename.slice(-8,4);
console.log(anotherString);


const newStringOne="    emily    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://emily.com/emily%20berret"  //%20 ki jgah space bhi ho skta h ,normal url space except nhi krti h jha space hoga vha %20 aa skta h ya lga skte h use htane k liye hum use "replace " krskte h
console.log(url.replace('%20','-'))

console.log(url.includes('emily')) // check weather this string is in there or not
console.log(url.includes('emin'))