import { HumanManager } from "./HumanManager/HumanManager";
import { OrderManager } from "./OrderMnager/OrderManager";
import { RoomManager } from "./RoomManager/RoomManager";

export class Resturant {
    public order: OrderManager = new OrderManager();
    public room: RoomManager = new RoomManager();
    public hr: HumanManager = new HumanManager();
    constructor(private name: string, private address: string) {}
}