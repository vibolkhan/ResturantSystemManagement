import { Customer } from "./Customer";
import { Staff } from "./Staff/Staff";

export class HumanManager {
    private staffs: Staff[] = [];
    private customers: Customer[] = [];
    
    addStaff(...staff: Staff[]) {
        this.staffs = this.staffs.concat(staff);
    }

    getStaff() {
        return this.staffs;
    }

    addCustomer(...customers: Customer[]) {
        this.customers = this.customers.concat(customers);
    }

    getCustomer() {
        return this.customers;
    }

    removeCustomer(other: Customer) {
        for (let i = 0; i < this.customers.length; i++) {
            if (this.customers[i].isEquals(other)) {
                this.customers.splice(i, 1);
            }
        }
    }

    removeCustomers() {
        this.customers = [];
    }

    removeStaff(other: Staff) {
        for (let i = 0; i < this.staffs.length; i++) {
            if (this.staffs[i].isEquals(other)) {
                this.staffs.splice(i, 1);
            }
        }
    }
}