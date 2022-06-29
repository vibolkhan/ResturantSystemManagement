import { Room } from "./Room";

export class RoomManager {
    private rooms: Room[] = [];

    addRoom(...rooms: Room[]) {
        this.rooms.concat(rooms);
    }
    
    getRoom() {
        for (let room of this.rooms) {
            return room;
        }
        return [];
    }

    findFreeRoom() {
        let result:Room[] = [];
        for (let room of this.rooms) {
            if (room.isRoomFree()) {
                result.push(room);
            }
        }
        return result;
    }
}