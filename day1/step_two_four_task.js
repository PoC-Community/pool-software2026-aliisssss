const obj = {
    foo: 1,
    name: "ali",
    lastname: "bassim",
    age: 19,

    propertyisanum() {
        return true;
    },
    getname() {
        return this.name;
    },
    getlastname() {
        return this.lastname;
    },
    getage() {
        return this.age;
    },
    getfoo() {
        return this.foo;
    },
}



obj.name = "loo";
obj.lastname = "oolmp";
obj.age = 20;

console.log(obj);

const obj1 = {
    foo: 1,
    name: "ali",
    lastname: "bassim",
    age: 19,

    propertyisanum() {
        return true;
    },
    getname() {
        return this.name;
    },
    getlastname() {
        return this.lastname;
    },
    getage() {
        return this.age;
    },
    getfoo() {
        return this.foo;
    },
}

let objectsarray = [obj, obj1];

console.log(objectsarray);


let newarray = objectsarray.filter(object => object.age > 19);

console.log(newarray);

let mapobjects = objectsarray.map(
    (object) => ({
        ...object,
        age: object.age + 200,
    })
);

console.log(objectsarray);

let found = objectsarray.find(
    object => object.age == 19,
);

console.log(found);

console.log(objectsarray.some(object => object.age > 19));

console.log(objectsarray.every(object => object.age > 19));


const arr = [1, 2, 3];

let [a, b, c] = arr;

console.log(a);
console.log(b);
console.log(c);

const objectss = { a: 1, b: 2, c: 8 };

const { a: ali, b: hala, c: dina } = objectss;

console.log(ali);
console.log(hala);
console.log(dina);


