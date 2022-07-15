const getName = ({ first_name, last_name }) => {
    {
        first_name && last_name ? `${first_name}_${last_name}` : `${first_name}`;
    }
};
let PhoneBookArr = [];
const detailsObj = {
    prefix: "pre",
    phone: [1, 2, 3, 4],
    addresses: ["roorkee", "haridwar"],
    email: "suhaib@gmail.com",
    firstName: "Suhaib",
    lastName: "Gour",
    middleName: "gour",
};
const PhoneBook = ({}) => {
    return detailsObj;
};
PhoneBookArr.push(PhoneBook(detailsObj));
console.log(PhoneBookArr);
//# sourceMappingURL=index.js.map