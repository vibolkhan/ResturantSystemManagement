import { Room } from "./Room";

export class RoomManager {
    private rooms: Room[] = [];

    addRoom(room: Room) {
        this.rooms.push(room);
    }
    
    getRoom() {
        for (let room of this.rooms) {
            return room;
        }
        return [];
    }
}