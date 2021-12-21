console.log('hello world');


/* variables var, let, const

let age= 30;
age= 44
console.log(age);
if we know variable will chance we use let; otherwise, const
const age=30;

//primitive data types
//strings, numbers,boolean, null, undefined

const name= 'John';
const age=30;
const rating = 4.5;
const isCool= true;
const x= null;
const y = undefined;
let z; (other way of undefined)

console.log(typeof x);

STRINGS
Concatenation
console.log('my name is' + name +'and I am' + age);
Template String (new and better)
const hello = `my name is ${name} and I am ${age} `;
console.log(hello);


String properties

const s='Hello world'
console.log (s.length);
console.log (s.toUpperCase);
console.log (s.split ('')); - to make an array out of a string

ARRAYS
  Variables with multiple values
  you don't have to have the same kind of data (numbers, strings etc)
  const fruits  = ['apples', 'oranges', 'pears', '10' , true ];
  console.log(fruits); 

  console.log(fruits[1]); --oranges bc arrays start with 0, 1, 2, etc. 
  
  
  to add onto the array
  Fruits [3] ='grapes'

  OR

  Fruits.push('mangos');  ---it will add to the end of the array
  fruits. unshift -- adds to the beginning
  fruits.pop ---deletes the last one
  console.log(Array.isArray ('mangos')); --to see if the one I wrote is in the array
  console.log(fruits.indexOf('oranges')); --to see the index


OBJECT LITERALS
    const person= {
    firstName: 'John'
    lastName:'Doe' 
    hobbies: ['music', 'movies', 'dance']
    }
    console.log(person.hobbies[1]);---we should get movies
    

LOOPS
for (let i= 0; i<10; i++) {
    console.log (i);
}

While loops
let i=0;
while (i<10) {
    console.log(i)
    i++
}

loop through arrays
forEach
map
filter

CONDITIONALS

const x=10;
if (x==10){
    console.log ('x is 10');
} else if (x>10){
    console.log (x is greater than 10);
} else {
    console.log ('x is less then 10);
}
== checks if the value matches
=== checks if the data type also matches 

Ternary operation 
const x = 10;
const color = x>10 ? (then) 'red' : (else) 'blue'


FUNCTION

function addNums (num1, num2)
{
    console.log(num1+num2)

}

addNums (5,4); ---it gives 9 


OBJECT ORIENTED PROGRAMMING
Constructor Function
function Person(firstName, lastName,dob) {
    this.firstName= firstName;
    this.lastName= lastName;
    this.dob = dob;

}


Class
Class Person {
    constructor (firstName, lastName, dob) {
        this.fistName= firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear (){
        return this.dob.getFullYear();

    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }

}


Instantiate Object
const person1 = new Person ('john', 'doe', '4-3-1980');
const person2 = new Person ('mary' , 'smith' , '3-6-1970);

console.log(person1); 



DOM Document Object Model
 Selectors

 Single Element Selectors
 console.log(document.getElementById ('my-form'));
 console.log (document.querySelector('h1'));

 Multiple Element
 console.log(document.querySelectorAll('.item'));
 console.log(getElementsByClassName('item'));
 console.log(getElementsByTagName('li'));

const items = document.querySelectorAll('.item');
items.forEach ((item) => console.log(item))


Manipulating DOM

const ul= document.querySelector ('.items');
ul.remove ();
ul.lastElementChild.remove();
ul.firstElementChild.textContent ='Hello';


const btn=document.querySelector ('.btn');
btn.style.background = 'red';

const btn=document.querySelector ('.btn');
btn.addEventListener ('click' , (e) => {
    e.preventDefault(); 
    document.querySelector ('#my-form').style.background='#ccc'

});





const myForm =document.querySelector ('#my-form');
const nameInput = document.querySelector ('#name');
const emailInput = document.querySelector ('#email');
const msg =document.querySelector ('.msg');
const uerList =document.querySelector ('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === ' ')|| emailInput.value === ' ') {
        msg.classList.add('error');
        msg.innerHTML = 'please enter all fields';

        setTimeout(() => msg.remove(), 3000);

    }else {
        const li=document.createElement ('li');
        li.appendChild(document.createTextNode(`${nameInput.value} ${emailInput.value}`));

        userList.appendChild(li);

        to clear fields
        nameInput.value = ' ';
        emailInput.value =' ';
    }
}*/
