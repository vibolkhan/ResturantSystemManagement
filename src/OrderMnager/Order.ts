import { Customer } from "../HumanManager/Customer";
import { Waiter } from "../HumanManager/Staff/Waiter";
import { Table } from "../RoomManager/Table";
import { FoodOrder } from "./FoodOrder";

export class Order {
    private foodOrders: FoodOrder[] = [];
    private customers: Customer[] = [];
    private isPaid: boolean = false;
    private date:string = new Date().toString();

    constructor (private id: number, private table: Table, private waiter: Waiter, ...customers: Customer[]) {
        this.customers = customers;
    }

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

    createRecipe() {
        let result = "";
        result += "_____ PNC Resturant _____" +"\n";
        for (let food of this.foodOrders) {
            result += food.getFood().getFoodName() + ": ";
            result += food.getFood().getPrice().toString()+ " Dollars" + '\n';
        }
        result += "----------------------------------" + '\n';
        result += "Total: " + this.getPrice().toString() + " Dollars";
        return result;
    }

    payMent(amount: number) {
        if (this.getPrice() <= amount) {
            this.isPaid = true;
            return this.createRecipe();
            
        } return "You need to paid more " + (this.getPrice() - amount).toString() + " Dollars";
    }

    getId() {
        return this.id;
    }

    getWaiter() {
        return this.waiter;
    }
}