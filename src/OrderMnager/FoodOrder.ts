import { FoodItem } from "./Food/FoodItem";

export class FoodOrder{
    constructor(private quantity: number, private foodItem: FoodItem) {
    }
    getFood() {
        return this.foodItem;
    }
    getQuantity() {
        return this.quantity;
    }
    getPrice() {
        return this.foodItem.getPrice();
    }
    isEquals(other: FoodOrder) {
        return this.foodItem.isEquals(other.getFood());
    }
}