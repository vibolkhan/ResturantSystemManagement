import { Table } from "./Table";

export class Room {
    private tables: Table[] = [];
    constructor(private id: number) {}
    
    addTable(...tables: Table[]) {
        this.tables = this.tables.concat(tables);
    }
    getTable() {
        for (let table of this.tables) {
            return table;
        }
        return [];
    }

    findFreeTable() {
        let result:Table[] = [];
        for (let table of this.tables) {
            if (table.isTableFree()) {
                result.push(table);
            }
        }
        return result;
    }

    isRoomFree() {
        for (let table of this.tables) {
            return (table.isTableFree())
        }
    }
}