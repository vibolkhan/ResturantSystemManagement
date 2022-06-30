import { Waiter } from "../HumanManager/Staff/Waiter";
import { Order } from "./Order";

export class OrderManager {
    private orders: Order[] = [];
    private revenue: number = 0;

    setRevenue() {
        for (let order of this.orders) {
            this.revenue += order.getPrice();
        }
        return this.revenue;
    }

    cancelOrder(orderItem: Order) {
        for (let i=0 ; i<this.orders.length ; i++) {
            if (this.orders[i].getId() === orderItem.getId()) {
                this.orders.splice(i,1)
            }
        }
    }

    addOrder(order: Order) {
        this.orders.push(order);
    }

    getOrder() {
        return this.orders;
    }

    getNumberOfOrder(waiter: Waiter) {
        let numberOfOrder = 0;
        for (let order of this.orders) {
            if (order.getWaiter().isEquals(waiter)) {
                numberOfOrder++;
            }
        }
        return numberOfOrder;
    }

    increaseSalaryWaiter(waiter: Waiter) {
        if (this.getNumberOfOrder(waiter) > 30) {
            waiter.increaseSalary(20);
        } else if (this.getNumberOfOrder(waiter) > 20){
            waiter.increaseSalary(10);
        } else if (this.getNumberOfOrder(waiter) >= 2){
            waiter.increaseSalary(5);
        }
    }
}   