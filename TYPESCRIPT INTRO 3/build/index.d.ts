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
declare function getUserType(obj: User | Admin): string;
declare const Person1: User;
declare const Person2: Admin;
