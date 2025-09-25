// Product List (Unsorted)
var products = [
    { name: "Laptop", price: 800 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 },
    { name: "Headphones", price: 150 },
];
// Sort by Price (Ascending Order)
var sortedAscending = products.slice().sort(function (a, b) { return a.price - b.price; });
console.log("Ascending Order:", sortedAscending);
// Sort by Price (Descending Order)
var sortedDescending = products.slice().sort(function (a, b) { return b.price - a.price; });
console.log("Descending Order:", sortedDescending);
