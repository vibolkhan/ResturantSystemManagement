import { Customer } from "../HumanManager/Customer";

export class Table {
    private customers: Customer[] = [];
    constructor(private id: number) {}

    addCustomer(...customers: Customer[]) {
        this.customers = this.customers.concat(customers);
    }

    removeCustomers() {
        this.customers = [];
    }

    removeCustomer(other: Customer) {
        for (let i = 0; i < this.customers.length; i++) {
            if (this.customers[i].isEquals(other)) {
                this.customers.splice(i, 1);
            }
        }
    }

    getCustomer(): Customer[] {
        return this.customers;
    }
}