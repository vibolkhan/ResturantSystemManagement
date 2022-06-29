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
}