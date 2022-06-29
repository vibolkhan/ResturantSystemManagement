import { FoodOrder } from "../../OrderMnager/FoodOrder";
import { Category, FoodItem, VEGETARIAN } from "./FoodItem";

export class Vegetarain extends FoodItem {
    constructor(quantity: number, price: number, private foodName: VEGETARIAN) {
        super (quantity, Category.VEGETARIAN, price, )
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
        return Category.VEGETARIAN;
    }
    decreaseQuantity(other: FoodOrder) {
        if (this.foodName === other.getFood().getFoodName()) {
            this.quantity -= other.getQuantity();
        }
        return this.quantity;
    }
}