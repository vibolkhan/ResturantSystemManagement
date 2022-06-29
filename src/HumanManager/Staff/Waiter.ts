import { Gender } from "../Person";
import { Staff, StaffCetegory } from "./Staff";

export class Waiter extends Staff {
    constructor(id: number, name: string, phone: string, gender: Gender) {
        super(id, name, phone, gender, StaffCetegory.WAITER);
    }
}