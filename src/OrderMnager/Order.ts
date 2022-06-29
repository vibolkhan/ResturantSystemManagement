import { Waiter } from "../HumanManager/Staff/Waiter";
import { Table } from "../RoomManager/Table";
import { FoodOrder } from "./FoodOrder";

export class Order {
    private foodOrders: FoodOrder[] = [];
    private isPaid: boolean = false;
    constructor (private id: number, private table: Table, private waiter: Waiter, private date: Date) {}

    addFood(...foodOrder: FoodOrder[]) {
        this.foodOrders = this.foodOrders.concat(foodOrder);
    }

    getPrice() {
        let price: number = 0;
        for (let food of this.foodOrders) {
            price += food.getPrice() * food.getQuantity();
        }
        return price;
    }

    getFoodOrders() {
        return this.foodOrders;
    }

    getTables() {
        return this.table;
    }

    payMent(amount: number) {
        if (this.getPrice() <= amount) {
            this.isPaid = true;
            
            return ;
        } return "You need to paid more money";
    }

    getId() {
        return this.id;
    }

}