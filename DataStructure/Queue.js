var OrderQueue = /** @class */ (function () {
    function OrderQueue() {
        this.orders = [];
    }
    OrderQueue.prototype.placeOrder = function (order) {
        this.orders.push(order);
        console.log("Order Placed");
    };
    OrderQueue.prototype.processOrder = function () {
        if (this.orders.length > 0) {
            console.log("Order proceed", this.orders.shift());
        }
        else {
            console.log("All order are processed. no more order available");
        }
    };
    return OrderQueue;
}());
var order1 = new OrderQueue();
order1.placeOrder("Pizza");
order1.placeOrder("Burger");
order1.processOrder();
order1.processOrder();
order1.processOrder();
