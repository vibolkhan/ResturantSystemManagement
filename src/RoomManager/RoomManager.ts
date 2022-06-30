import { Room } from "./Room";

export class RoomManager {
    private rooms: Room[] = [];

    addRoom(...rooms: Room[]) {
        this.rooms.concat(rooms);
    }
    
    getRoom(): Room[] {
        let result: Room[] = [];
        for (let room of this.rooms) {
            result.push(room);
        }
        return result;
    }

    findFreeRoom():Room[] {
        let result:Room[] = [];
        for (let room of this.rooms) {
            if (room.isRoomFree()) {
                result.push(room);
            }
        }
        return result;
    }
}