import { FoodItem } from "../Kitchen/Food/FoodItem";

export class OrderItem{
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
    isEquals(other: OrderItem) {
        return this.foodItem.isEquals(other.getFood());
    }
}