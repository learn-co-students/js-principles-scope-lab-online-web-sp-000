// Write your solution in this file!
var customerName = 'bob';

const upperCaseCustomerName = () => {
    customerName = customerName.toUpperCase();
};

let setBestCustomer = () => {
     bestCustomer = 'not bob'
};

let overwriteBestCustomer = () => {
    bestCustomer = 'maybe bob'
};

const changeLeastFavoriteCustomer = () => {
    leastFavouriteCustomer = "Paul"
}

//on purpose: unsuccessfully trying to reassign the least favourite customer
 const leastFavouriteCustomer = 'someone';