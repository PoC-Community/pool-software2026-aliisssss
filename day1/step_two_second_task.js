function returnvalue(value) {
    return value;
}

console.log(returnvalue("ali"));


const add = (a, b) => {
  return a + b;
};

console.log(add(2 , 2));

function returnvalue2() {
    return 2;
}
console.log(returnvalue2());


const takestring = (str) =>  {
    return "hello " + str;
}

function helloname(str, CallBack) {
    return CallBack(str);
}

console.log(helloname("ali", takestring));

