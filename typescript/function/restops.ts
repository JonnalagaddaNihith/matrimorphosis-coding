// function fullname(fname:string, ...othernames:string[]){
//     console.log(fname + othernames.join(" "))
// }

// fullname("Nihit", "Jonnalagadda", "Rajasekhar")

// function totcharge(...amount: number[]) {
//   let total = 0;
//   for (let val of amount) {
//     total += val;
//   }
//   console.log("Total:", total);
// }

// totcharge(10, 20, 30);

function totcharge(...amount: number[]) {
  console.log("Total:", amount.reduce((a, b) => a + b));
}

totcharge(10, 20, 30);

// interface Product {
//   productName: string;
//   productPrice: number;
// }
// let pd1: Product = { productName: "Kettle", productPrice: 5000 };
// let pd2: Product = { productName: "Window screen", productPrice: 300 };
// let pd3: Product = { productName: "Biscuits", productPrice: 100 };
// function addProductPrice(...pdt: Product[]) {
//   let totalPrice = 0;
//   pdt.map((p) => (totalPrice += p.productPrice));
//   return totalPrice
// }
// console.log(addProductPrice(pd1, pd2));
