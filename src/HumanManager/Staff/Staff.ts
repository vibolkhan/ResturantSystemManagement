import { Gender, Person } from "../Person";

export enum StaffCetegory {
    WAITER = "Waiter",
    CLEANER = 'Cleaner',
    CASHER = "Casher",
    CHEF = 'Chef',
}

export class Staff extends Person {
    protected salary: number = 180;
    constructor(id: number, name: string, phone: string, gender: Gender, private category: StaffCetegory ) {
        super(id, name, phone, gender);
    }

    getSalary() {
        return this.salary;
    }

    increaseSalary(amount: number) {
        this.salary += amount;
    }

    descreseSalary(amount: number) {
        this.salary -= amount;
    }

    isEquals(other:Staff) {
        return (this.id === other.id && this.name === other.name && this.gender === other.gender);
    }
    
}