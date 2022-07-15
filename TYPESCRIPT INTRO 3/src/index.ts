interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}
function getUserType(obj: User | Admin):string{
    return obj.type;
}

const Person1: User = {
    type: "user",
    name: "Masai",
    age: 3,
    occupation:"coding"
}
const Person2: Admin = {
    type: "admin",
    name: "Masai",
    age: 3,
    role:"Manager"
}
console.log(getUserType(Person1))
console.log(getUserType(Person2))
