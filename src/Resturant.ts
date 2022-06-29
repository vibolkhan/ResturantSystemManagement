import { HumanManager } from "./HumanManager/HumanManager";
import { Kitchen } from "./Kitchen/Kitchen";
import { OrderManager } from "./OrderMnager/OrderManager";
import { RoomManager } from "./RoomManager/RoomManager";

export class Resturant {
    public kitchen: Kitchen = new Kitchen();
    public order: OrderManager = new OrderManager();
    public room: RoomManager = new RoomManager();
    public hr: HumanManager = new HumanManager();
    constructor(private name: string, private address: string) {}
}