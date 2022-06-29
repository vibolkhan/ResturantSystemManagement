export class Customer {
    constructor(private id: number) {

    }
    isEquals(other: Customer): boolean {
        return this.id === other.id;
    }
}