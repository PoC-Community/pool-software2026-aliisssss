let age = 24;

if (age < 25) {
    console.log("take HGH man :(");
} else {
    console.log("you are a rel man :)");
}

let name = "ali";

switch (name) {
    case "ali" :
        console.log("you are the brother :)");
        break
    case "lala":
        console.log("you are the sister :)");
        break
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let number = 0;

while(number < 5) {
    console.log("add one baby");
    number++;
}
console.log("stop adding im already", number)


const numbers = [10, 20, 30];

numbers.forEach( (number, index) => {
    console.log(number, index);
}
);

const newnumbers = numbers.map(
    (number, index, array) => array[index] = number * 2
);

console.log(newnumbers);

const evenNumbers = numbers.filter(n => n % 2 === 0);

console.log(evenNumbers);

const Numbers = numbers.reduce(n => n % 2 === 0);

console.log(evenNumbers);

const result = numbers.reduce((total, number) => {
  return total + number;
}, 0);

console.log(result); 