function getUserType(obj) {
    return obj.type;
}
const Person1 = {
    type: "user",
    name: "Masai",
    age: 3,
    occupation: "coding"
};
const Person2 = {
    type: "admin",
    name: "Masai",
    age: 3,
    role: "Manager"
};
console.log(getUserType(Person1));
console.log(getUserType(Person2));
//# sourceMappingURL=index.js.map