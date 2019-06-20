var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = `not ${customerName.toLowerCase()}`;
}

function overwriteBestCustomer() {
  bestCustomer = `maybe ${customerName.toLowerCase()}`;
}

const leastFavoriteCustomer = "somebody";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "somebody else";
}
