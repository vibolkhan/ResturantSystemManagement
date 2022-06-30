import { OrderItem } from "../OrderItem";

export enum Category {
    DRINK = "Drink",
    DESSERT = "Dessert",
    MEAL = "Meal",
    VEGETARIAN = "Vegetarian",
}

export enum DRINK {
    APPLEJUICE = "AppleJuice",
    ORANGJUICE = "OrangeJuice",
    GREENTEA = "GreenTea",
    COFFEE = "Coffee",
    KOKAKOLA= "Kokakola",
    STING = "Sting",
}
export enum DESSERT {
    JELLY = "Jelly",
    CAKE = "Cake",
    PUMPKINCAKE= "PumpkinCake",
    BANANACAKE = "Bananacake",
    COCONUTCAKE = "Coconutcake",
}
export enum MEAL {
    FISHAMOK = "Fishamok",
    MACHUTREY = "Machutrey",
    BROHERTREY = "Brohertrey",
    KORKO = "Korko",
    KHMERNOODLE = "Khmernoodle",
}
export enum VEGETARIAN {
    VEGGIESCHA = "Veggiescha",
    EGGSOUP = "Eggsoup",
    VEGGIESSOUP = "Veggiessoup",
}

export abstract class FoodItem {
    constructor(protected quantity: number, protected foodCategory: Category, protected price: number) {}

    abstract getPrice(): number;
    abstract isEquals(Other: FoodItem): boolean;
    abstract addQuantity():void;
    abstract getFoodName(): string;
    abstract getCategory(): Category;
    abstract getQuantity(): number;
    abstract decreaseQuantity(other: OrderItem): number;
}