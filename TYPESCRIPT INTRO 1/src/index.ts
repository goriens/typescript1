let first_name: string = "suhaib";

let age: number = 22;

let isFetching: boolean = false;

let arrNum: number[] = [1, 2, 3, 4, 5];

let arrStr: string[] = ["Masai", "school", "name"];

let tuple: [string, boolean];
tuple = ["Masai", true];

enum Enum {
    User,
    SuperUser,
    Admin,
    SuperAdmin
}

function product(x: number, y: number): number {
    return x * y;
}
// console.log(product(2,2));

function divide(x: number, y: number): number {
    return x / y;
}
// console.log(divide(2,2));

function anything(name: string): void {
    console.log(`${name}`)
}
