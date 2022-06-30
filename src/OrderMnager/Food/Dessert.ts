import { OrderItem } from "../OrderItem";
import { Category, DESSERT, FoodItem, MEAL } from "./FoodItem";

export class Dessert extends FoodItem {
    constructor(quantity: number, price: number, private foodName: DESSERT) {
        super (quantity, Category.DESSERT, price, )
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
        return Category.DESSERT;
    }
    decreaseQuantity(other: OrderItem) {
        if (this.foodName === other.getFood().getFoodName()) {
            this.quantity -= other.getQuantity();
        }
        return this.quantity;
    }
}