const sum=(n1,n2)=>{
    return n1+n2
}
console.log(sum(21,14));


const numbers = [1,2,3,4,5,6,7,8,9]; 

const largestNumber = (values) => {
    let highest = 0;
    for (let i=0; i<values.lengt; i+=1) {
        if (values[i] > highest) {
            highest = values[i];
        }
    }
}

console.log(Math.max(...numbers));


let number = 5

let remainder = (number % 2)

if( remainder == 0){
    console.log(`${number} is even`)
}else{
    console.log(`${number} is Odd`)
}


function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}
const arr = [1, 2, 3, 4, 5]
sumArray(arr);

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++){
        console.log(i + " X " + j + " = " + i * j);
    }
}