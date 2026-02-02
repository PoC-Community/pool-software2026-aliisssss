
function greet(name: string) {
    return "Hello " + name;
}

const multiply = (a: number, b: number) => {
    return a * b;
};

function greetUser(name: string, greeting?: string) {
    if (greeting) {
        return greeting + ", " + name;
    }
    return "Hello, " + name;
}

function processArray(arr: number[], callback: (n: number) => number) {
    return arr.map(callback);
}

function displayUserProfile(user: { name: string; email: string }) {
    console.log("User: " + user.name + " (" + user.email + ")");
}

function identity<T>(value: T): T {
    return value;
}

console.log(greet("Ali"));
console.log(multiply(5, 10));
console.log(greetUser("Ali", "Bonjour"));
console.log(processArray([1, 2, 3], (n) => n * 2));
displayUserProfile({ name: "Ali", email: "ali@example.com" });
console.log(identity(42));
console.log(identity("TypeScript is cool"));
