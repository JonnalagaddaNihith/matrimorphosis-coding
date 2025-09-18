// Product class
var Product = /** @class */ (function () {
    function Product(pname, qty) {
        this.productname = pname;
        this.qty = qty;
    }
    return Product;
}());
// Create a Map to store product stock (Product ID -> Product)
var proStock = new Map();
// Adding products with initial stock
proStock.set("p001", new Product("iPhone", 10));
proStock.set("p002", new Product("Headset", 20));
// Function to purchase product
function purProduct(productId, qty) {
    if (proStock.has(productId)) {
        var product = proStock.get(productId);
        if (product.qty >= qty) {
            product.qty -= qty; // reduce stock
            console.log("\u2705 Purchased ".concat(qty, " ").concat(product.productname, "(s). Remaining stock: ").concat(product.qty));
            // Remove if stock is 0
            if (product.qty === 0) {
                proStock.delete(productId);
                console.log("\u26A0\uFE0F ".concat(product.productname, " is now out of stock and removed."));
            }
        }
        else {
            console.log("\u274C Not enough stock for ".concat(product.productname, ". Only ").concat(product.qty, " left."));
        }
    }
    else {
        console.log("\u274C Product with ID ".concat(productId, " not found."));
    }
}
// Example Usage
purProduct("p001", 2); // ✅ Purchased 2 iPhone(s). Remaining stock: 8
purProduct("p002", 25); // ❌ Not enough stock
purProduct("p003", 1); // ❌ Product not found
