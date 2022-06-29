import { FoodOrder } from "../FoodOrder";
import { Category, FoodItem, MEAL } from "./FoodItem";

export class Meal extends FoodItem {
    constructor(quantity: number, price: number, private foodName: MEAL) {
        super (quantity, Category.MEAL, price, )
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
        return Category.MEAL;
    }
    decreaseQuantity(other: FoodOrder) {
        if (this.foodName === other.getFood().getFoodName()) {
            this.quantity -= other.getQuantity();
        }
        return this.quantity;
    }
}