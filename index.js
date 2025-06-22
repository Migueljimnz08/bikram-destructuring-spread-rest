//RESUELVE LOS EJERCICIOS AQUÍ
//Ej 1
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

let [, ana, ] = empleados;

//Ej 2
    let [{email: emailLuis}, ,] = empleados;
//Ej 3
let a = 5;
let b = 3;

[a, b] = [b, a];
//Ej 4
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

const {today: maximaHoy, tomorrow: maximaManana} = HIGH_TEMPERATURES;
//Ej 5

function sumEveryOther (...rest) {
let total = 0;
for (let i =0; i< rest.length; i++){
    total += rest[i]
} return total;
}
//Ej 6

function addOnlyNums (...rest) {
    let total = 0;
    for(let i= 0; i< rest.length; i++){
        if(typeof(rest[i]) === 'number'){
            total += rest[i];
        }
    } return total
}

//Ej 7
function countTheArgs (...rest) {
    return rest.length;
}

//Ej 8
  function combineTwoArrays (user1, user2) {
    let newUser = [];
    newUser.push(...user1, ...user2);
    return newUser;
  }
//Ej 9
function onlyUniques (...rest) {
    let uniques = [];
    for(let i in rest){
        if(!uniques.includes(rest[i])){
            uniques.push(rest[i]);
        }
    }return uniques; 
}
//Ej 10
function combineAllArrays (...arr){
    let newArr = [];
    for(let i in arr){
        for(let a in arr[i]){
            newArr.push(arr[i][a]);
        }
    }
    return newArr;
}
//Ej 11
function sumAndSquare (...arr){
    let total = 0;
    for(let i in arr){
        total += Math.pow(arr[i], 2);
    }return total;
}