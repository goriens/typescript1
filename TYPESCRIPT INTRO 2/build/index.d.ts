interface interFace {
    title: string;
    status: boolean;
    id: number;
}
interface Person {
    first_name: string;
    last_name?: string;
}
declare const getName: ({ first_name, last_name }: Person) => void;
interface Address {
    houseNumber: number;
    street: string;
    city: string;
    state: string;
    postalCode: number;
    country: string;
    types: string;
}
interface PersonDetails {
    prefix?: string;
    phone: number[];
    addresses: string[];
    email: string;
    firstName: string;
    lastName: string;
    middleName?: string;
}
declare let PhoneBookArr: any[];
declare const detailsObj: PersonDetails;
declare const PhoneBook: ({}: PersonDetails) => PersonDetails;
