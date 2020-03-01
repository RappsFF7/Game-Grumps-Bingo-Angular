export class Tile {
    title: string;
    free: boolean = false;

    // runtime
    isSelected: boolean = false;

    constructor(title: string, free: boolean = false) {
        this.title = title;
        this.free = free;
    }
}
