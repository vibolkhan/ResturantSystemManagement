export enum Gender {
    MALE = "Male",
    FEMALE = "Female",
}
export abstract class  Person {
    constructor(protected id: number, protected name: string, protected phone: string,protected gender: Gender) {
        
    }
}