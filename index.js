// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

var bestCustomer;

function setBestCustomer(){
  bestCustomer = "not bob";
}

function overwriteBestCustomer(name) {
  bestCustomer = name;
}

const leastFavoriteCustomer = "bob";

function changeLeastFavoriteCustomer(name) {
  leastFavoriteCustomer = name;
}
