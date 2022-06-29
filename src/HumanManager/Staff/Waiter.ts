import { Gender } from "../Person";
import { Staff, StaffCetegory } from "./Staff";

export class Waiter extends Staff {
    constructor(id: number, name: string, phone: string, gender: Gender) {
        super(id, name, phone, gender, StaffCetegory.WAITER);
    }
    isEquals(other:Waiter): boolean {
        return (
            this.id === other.id &&
            this.name === other.name &&
            this.phone === other.phone &&
            this.gender === other.gender
        )
    }
    increaseSalary(amount: number) {
        this.salary += amount;
    }
}