// Write your solution in this file!
// Declare a global variable called customerName and assign it the value 'bob'
var customerName = 'bob';

// Function to uppercase the customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to declare a global variable bestCustomer and assign it 'not bob'
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Function to overwrite the global variable bestCustomer with 'maybe bob'
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare a constant called leastFavoriteCustomer
const leastFavoriteCustomer = 'Alice';

// Function to attempt changing the leastFavoriteCustomer constant
function changeLeastFavoriteCustomer() {
  // This will throw an error because leastFavoriteCustomer is a constant
  leastFavoriteCustomer = 'Charlie'; // This will result in a TypeError
}

