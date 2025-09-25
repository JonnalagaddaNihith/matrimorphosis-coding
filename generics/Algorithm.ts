// Define Product Interface
interface Product {
  name: string;
  price: number;
}


// Product List (Unsorted)
let products: Product[] = [
  { name: "Laptop", price: 800 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
  { name: "Headphones", price: 150 },
];


// Sort by Price (Ascending Order)
let sortedAscending = products.slice().sort((a, b) => a.price - b.price);
console.log("Ascending Order:", sortedAscending);


// Sort by Price (Descending Order)
let sortedDescending = products.slice().sort((a, b) => b.price - a.price);
console.log("Descending Order:", sortedDescending);
