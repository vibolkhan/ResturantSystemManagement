import { Customer } from "../HumanManager/Customer";

export class Table {
    private customers: Customer[] = [];
    private isFree: boolean = true;
    constructor(private id: number, private numberOfChair: number) {}

    addCustomer(...customers: Customer[]) {
        if (customers.length < this.numberOfChair && this.isFree) {
            this.customers = this.customers.concat(customers);
            this.isFree = false;
        }
    }

    addChair(numberOfChair: number) {
        this.numberOfChair += numberOfChair;
    }

    removeCustomers() {
        this.customers = [];
        this.isFree = true;
    }

    removeCustomer(other: Customer) {
        for (let i = 0; i < this.customers.length; i++) {
            if (this.customers[i].isEquals(other)) {
                this.customers.splice(i, 1);
            }
        }
    }

    isTableFree() {
        return this.customers.length == 0;
    }

    getCustomer(): Customer[] {
        return this.customers;
    }
}