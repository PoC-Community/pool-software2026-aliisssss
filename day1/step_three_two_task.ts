
const userName: string = "Ali";
const age: number = 25;
const isStudent: boolean = true;

console.log(`User: ${userName}, Age: ${age}, Student: ${isStudent}`);

const fruits: string[] = ["apple", "banana", "orange"];
const scores: Array<number> = [95, 88, 72];

interface User {
    id: number;
    username: string;
    email: string;
    age?: number;
}

const user1: User = {
    id: 1,
    username: "ali_dev",
    email: "ali@example.com"
};

const user2: User = {
    id: 2,
    username: "john_doe",
    email: "john@example.com",
    age: 30
};

interface Product {
    name: string;
    price: number;
    category: "electronics" | "clothing" | "food";
}

const product1: Product = {
    name: "Laptop",
    price: 1200,
    category: "electronics"
};

let id: string | number;
id = 101;
id = "PRD-202";

function printUserDetails(user: User) {
    console.log(`User ${user.username} (${user.email})`);
    if (user.age) {
        console.log(`Age: ${user.age}`);
    } else {
        console.log("Age not specified");
    }
}

printUserDetails(user1);
printUserDetails(user2);
