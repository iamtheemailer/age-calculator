/*

let fruits = ['orange','apple','custratdapple'];

console.log(fruits.join('_'));
console.log(fruits.pop(), fruits);
console.log(fruits.push('Banana'),fruits);
fruits[fruits.length] = 'advocade';
console.log(fruits);
console.log('to string',fruits.toString());
console.log(fruits.unshift('hel'));
let negetables =['tomato','aspragus','brocolli'];
let combine = fruits.concat(negetables);
console.log(combine.slice(0,6));
console.log(combine.sort());
let some =[3,5,3,2,8,5,0,7,6]
console.log(some.sort(function(a,b){
    return a-b;
}))//sorted in asendind order
*/
/*
let kil ={
    first : 'keerthi',
    age: 18,
};
kil.age++;
console.log(kil.age);
//let fun = prompt('who is this?');
if(fun != 'keerthi'){
    console.log("not name");
}
else{
    console.log("name")
}
*/
/*
let days = 5;
switch(days){
    case 1:
        days = 'monday';
        break;
     case 2:
         days = 'tuesday';
         break;
    case 3:
         days =' wednesdasy';
         break;
     case 4:
         days =' thursday';
         break;
     case 5:
         days =' friday';
         break;
      case 6:
         days =' saturday';
         break;
    default:
        days = 'weekday';

}
console.log(days);*/
function ageInDays(){
var birthYear = prompt('what year were u born?');
var ageDays = (2021-birthYear) * 365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('you are year ' + ageDays+'days')
h1.setAttribute('id','ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
console.log(ageDays);
}
function rest(){
    document.getElementById('ageInDays').remove();
}