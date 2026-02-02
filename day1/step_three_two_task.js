var userName = "Ali";
var age = 25;
var isStudent = true;
console.log("User: ".concat(userName, ", Age: ").concat(age, ", Student: ").concat(isStudent));
var fruits = ["apple", "banana", "orange"];
var scores = [95, 88, 72];
var user1 = {
    id: 1,
    username: "ali_dev",
    email: "ali@example.com"
};
var user2 = {
    id: 2,
    username: "john_doe",
    email: "john@example.com",
    age: 30
};
var product1 = {
    name: "Laptop",
    price: 1200,
    category: "electronics"
};
var id;
id = 101;
id = "PRD-202";
function printUserDetails(user) {
    console.log("User ".concat(user.username, " (").concat(user.email, ")"));
    if (user.age) {
        console.log("Age: ".concat(user.age));
    }
    else {
        console.log("Age not specified");
    }
}
printUserDetails(user1);
printUserDetails(user2);
