import { Tile } from './tile';
import { Title } from '@angular/platform-browser';

import * as $ from 'jquery';

export class Gameboard {
    default: boolean = false;
    name: string;
    tiles: Tile[];

    // runtime
    rows?: Tile[][];

    public static generateDefaultBoard(): Gameboard {
        let board = new Gameboard();
        board.name = 'Power Hour!';
        //img: 'images/gg_bg.jpg',
        board.tiles = [
            // Arin
            new Tile("Arin puts something in his mouth", true),
            new Tile("Arin wins"),
            new Tile("Arin breaks something"),
            new Tile("Arin drools"),
            new Tile("Arin gets something thrown at him"),

            // Dan
            new Tile("Dan wins"),
            new Tile("Dan ties his hair up"),
            new Tile("Dan leans on arin laughing"),
            new Tile("Dan mentions a band"),
            new Tile("Dan blank stare"),

            // Others
            new Tile("Suzy!"),
            new Tile("Ross!"),
            new Tile("Allie!"),
            new Tile("Reluctant participant"),
            new Tile("Guest grumps"),

            // Situation
            new Tile("Sticky substance on face"),
            new Tile("Belly Reveal"),
            new Tile("Singing together"),
            new Tile("Someone in pain"),
            new Tile("The cheese is mentioned"),
            new Tile("Item not used for inteneded purpose"),
            new Tile("Crew asked a question"),

            // Episodic
            new Tile("Out of the office"),
            new Tile("Versus Episode"),
            new Tile("Table is messed up")
        ];
        return board;
    }

    public doRandomizeRows() {
        // Ignore tiles with no title
        var availableTiles = this.tiles.filter((el, i) => !!el.title);
    
        // Get normal tiles
        var normalTiles = availableTiles.filter((el, i) => !el.free);

        // Get free tiles
        var freeTiles = availableTiles.filter((el, i) => !!el.free);

        // Verify the board is valid
        if (normalTiles.length < 24) {
            alert('Not enough normal tiles to create a board (required: 24, current: ' + normalTiles.length + ')'); return;
        }
        if (freeTiles.length < 1) {
            alert('No free tiles (required: 1, current: ' + freeTiles.length + ')'); return;
        }

        // Only keep one free tile
        var freeTile = freeTiles.splice(Math.floor(Math.random() * freeTiles.length), 1);

        // Build board
        this.rows = [];
        for (var r = 0; r < 5; r++) {
            let cols: Tile[] = [];
            for (var c = 0; c < 5; c++) {
                var val = undefined;
                if (!!freeTile && r == 2 && c == 2) {
                    // At the center, use a free tile
                    val = freeTile[0];
                } else {
                    // Pop out a random element from the available tiles
                    var valIndex = Math.floor(Math.random() * normalTiles.length);
                    val = normalTiles.splice(valIndex, 1)[0];
                }
                cols[c] = val;
            }
            this.rows[r] = cols;
        }
    }

    public toSerialized(): string {
        return btoa(JSON.stringify(this));
    }

    public static fromSerialized(serializedData: string): Gameboard {
        return (serializedData ? $.extend((new Gameboard()), JSON.parse(atob(serializedData))) : undefined);
    }
}
