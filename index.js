// Write your solution in this file!
var customerName = "bob";
const leastFavoriteCustomer = 'tony'

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
}

function setBestCustomer(){
  bestCustomer = "not bob";
}

function overwriteBestCustomer(newCustomer){
  bestCustomer = newCustomer;
}

function changeLeastFavoriteCustomer(newCustomer){
  leastFavoriteCustomer = newCustomer;
}