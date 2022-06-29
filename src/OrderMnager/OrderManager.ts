import { FoodItem } from "./Food/FoodItem";
import { Menu } from "./Menu";
import { Order } from "./Order";

export class OrderManager {
    private orders: Order[] = [];
    menu: Menu = new Menu();

    addOrder(...orderItem: Order[]) {
        for (let order of orderItem) {
            for (let food of order.getFoodOrders()) {
                if (this.menu.getQuality(food.getFood()) >= food.getQuantity()) {
                    this.orders = this.orders.concat(orderItem);
                    for (let item of this.menu.getFoods()) {
                        item.decreaseQuantity(food);
                    }
                    return "Order successed";
                }
            }
        } 
        return "Sorry, we don't have enough foods";
    }

    cancelOrder(orderItem: Order) {
        for (let i=0 ; i<this.orders.length ; i++) {
            if (this.orders[i].getId() === orderItem.getId()) {
                this.orders.splice(i,1)
            }
        }
    }

    getOrder() {
        return this.orders;
    }
}   