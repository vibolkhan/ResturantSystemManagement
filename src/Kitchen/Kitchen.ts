import { Order } from "../OrderMnager/Order";
import { Category, FoodItem } from "./Food/FoodItem";

export class Kitchen {
    private foodItems: FoodItem[] = [];

    getFoods() {
        return this.foodItems;
    }

    addFood(...foods: FoodItem[]) {
        this.foodItems = this.foodItems.concat(foods);
    }

    getFoodByCategory(category: Category) {
        let result:FoodItem[] = [];
        for (let food of this.foodItems) {
            if (food.getCategory() == category) {
                result.push(food);
            }
        }
        return result;
    }   
}
