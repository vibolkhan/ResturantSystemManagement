import { Category, FoodItem } from "./Food/FoodItem";

export class Menu {
    private foodItems: FoodItem[] = [];

    getFoods() {
        return this.foodItems;
    }

    addFood(...foods: FoodItem[]) {
        this.foodItems = this.foodItems.concat(foods);
    }

    getQuality(other: FoodItem) {
        for (let food of this.foodItems) {
            if (food.getFoodName() === other.getFoodName()) {
                return food.getQuantity();
            }
        }
        return 0;
    }

    getName(other: FoodItem) {
        for (let food of this.foodItems) {
            if (food.getFoodName() === other.getFoodName()) {
                return food.getFoodName();
            }
        }
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
