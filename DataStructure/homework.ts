// Product class
class Product {
  productname: string;
  qty: number;

  constructor(pname: string, qty: number) {
    this.productname = pname;
    this.qty = qty;
  }
}

// Create a Map to store product stock (Product ID -> Product)
let proStock = new Map<string, Product>();

// Adding products with initial stock
proStock.set("p001", new Product("iPhone", 10));
proStock.set("p002", new Product("Headset", 20));

// Function to purchase product
function purProduct(productId: string, qty: number): void {
  if (proStock.has(productId)) {
    let product = proStock.get(productId)!;

    if (product.qty >= qty) {
      product.qty -= qty; // reduce stock
      console.log(
        `✅ Purchased ${qty} ${product.productname}(s). Remaining stock: ${product.qty}`
      );

      // Remove if stock is 0
      if (product.qty === 0) {
        proStock.delete(productId);
        console.log(`⚠️ ${product.productname} is now out of stock and removed.`);
      }
    } else {
      console.log(
        `❌ Not enough stock for ${product.productname}. Only ${product.qty} left.`
      );
    }
  } else {
    console.log(`❌ Product with ID ${productId} not found.`);
  }
}

// Example Usage
purProduct("p001", 2);  // ✅ Purchased 2 iPhone(s). Remaining stock: 8
purProduct("p002", 25); // ❌ Not enough stock
purProduct("p003", 1);  // ❌ Product not found
