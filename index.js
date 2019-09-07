// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer(){
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer(x){
    bestCustomer = x;
}

const leastFavoriteCustomer = "";

function changeLeastFavoriteCustomer(x){
    leastFavoriteCustomer = x;
}