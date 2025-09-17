abstract class FoodService{
    abstract searchRestaurant(food:string):void;
    abstract pay(amount:number):void;
    abstract placeOrder(food:string,qty:number):void;
    closureMessage(msg:string){
        console.log(msg)
    }
}
class Swiggy extends FoodService {
   searchRestaurant(food: string): void{
        console.log("searching the restaurant for the given food:",food)
   }
   pay(amount: number): void{
    console.log("you have successfully paid")


   }
   placeOrder(food: string, qty: number): void{
    console.log("order has been placed")
   }
}




class Zomato extends FoodService {
  searchRestaurant(food: string): void {
    console.log("zomato")
  }
  pay(amount: number): void {
    console.log("zomato");
  }
  placeOrder(food: string, qty: number): void {
    console.log("zomato");
  }
}
const userOrder = new Zomato();
userOrder.searchRestaurant("Pizza");
userOrder.placeOrder("Pizza", 2);
userOrder.pay(2000);


// Polymorphism:
// Step 1: Define the interface
interface PaymentMethod {
  pay(amount: number): void;
}


// Step 2: Implement different payment types
class CreditCard implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ₹${amount} using Credit Card (via bank gateway).`);
  }
}


class Cash implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ₹${amount} using Cash. Change returned if any.`);
  }
}


class UPI implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ₹${amount} using UPI (PhonePe/GPay).`);
  }
}


class GiftCard implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ₹${amount} using Gift Card. Balance updated.`);
  }
}


// Step 3: Customer uses any payment method
function checkout(payment: PaymentMethod, amount: number): void {
  payment.pay(amount); // Polymorphic call
}


// Step 4: Try different payment methods
checkout(new CreditCard(), 500);
checkout(new Cash(), 300);
checkout(new UPI(), 200);
checkout(new GiftCard(), 150);
