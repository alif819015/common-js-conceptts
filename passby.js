// primitive types are pass by value
let num1 = 5;
let num2 = 7;
function multiply(a, b){
    a = 27;
    const result = a * b;
   return result;
}
const output = multiply(num1, num2);
console.log(output);

// object and array are pass by  refarence
let student1 = {name: 'Mahmud', patner: 'Rushi'};
let student2 = {name: 'Alif', patner: 'Rima'};

function makeChanger(couple1, couple2){
    couple1.name = 'Hasan';
    couple2.patner = 'Jannat';
}
console.log(student1, student2);
makeChanger(student1,student2);
console.log(student1, student2);

