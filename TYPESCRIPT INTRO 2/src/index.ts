interface interFace {
  title: string;
  status: boolean;
  id: number;
}

interface Person {
  first_name: string;
  last_name?: string;
}
const getName = ({ first_name, last_name }: Person) => {
  {
    first_name && last_name ? `${first_name}_${last_name}` : `${first_name}`;
  }
};

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
let PhoneBookArr = [];
const detailsObj: PersonDetails = {
  prefix: "pre",
  phone: [1, 2, 3, 4],
  addresses: ["roorkee", "haridwar"],
  email: "suhaib@gmail.com",
  firstName: "Suhaib",
  lastName: "Gour",
  middleName: "gour",
};

const PhoneBook = ({}: PersonDetails) => {
  return detailsObj;
};
PhoneBookArr.push(PhoneBook(detailsObj));
console.log(PhoneBookArr)


