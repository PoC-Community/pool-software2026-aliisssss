
function greet(name) {
    return "Hello " + name;
}
var multiply = function (a, b) {
    return a * b;
};
function greetUser(name, greeting) {
    if (greeting) {
        return greeting + ", " + name;
    }
    return "Hello, " + name;
}
function processArray(arr, callback) {
    return arr.map(callback);
}
function displayUserProfile(user) {
    console.log("User: " + user.name + " (" + user.email + ")");
}
function identity(value) {
    return value;
}
console.log(greet("Ali"));
console.log(multiply(5, 10));
console.log(greetUser("Ali", "Bonjour"));
console.log(processArray([1, 2, 3], function (n) { return n * 2; }));
displayUserProfile({ name: "Ali", email: "ali@example.com" });
console.log(identity(42));
console.log(identity("TypeScript is cool"));
