import { FoodOrder } from "../FoodOrder";
import { Category, DRINK, FoodItem, MEAL } from "./FoodItem";

export class Drink extends FoodItem {
    constructor(quantity: number, price: number, private foodName: DRINK) {
        super (quantity, Category.DRINK, price, )
    }
    
    isEquals(other: FoodItem): boolean {
        return (other.getFoodName() == this.getFoodName());
    }

    getPrice(): number { 
        return this.price; 
    }
    addQuantity() {
        this.quantity += 1;
    }
    getFoodName() {
        return this.foodName;
    }
    getQuantity() {
        return this.quantity;
    }
    getCategory() {
        return Category.DRINK;
    }
    decreaseQuantity(other: FoodOrder) {
        if (this.foodName === other.getFood().getFoodName()) {
            this.quantity -= other.getQuantity();
        }
        return this.quantity;
    }
}