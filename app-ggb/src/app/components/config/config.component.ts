import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { GameboardService } from '../../services/gameboard.service';
import { Gameboard } from '../../models/gameboard';
import { Tile } from '../../models/tile';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  newTileName: string

  constructor(public gameboardService: GameboardService) { 
  }

  ngOnInit(): void {
  }

  doUpdate() {
    // TODO this is a workaround, the currentBoard and boards don't stay in sync after isSelected is changed. The side effect is the board is randomized after a tile change.
    this.gameboardService.currentBoard.rows = undefined;
    console.log(this.gameboardService.boards, this.gameboardService.currentBoard)
    this.gameboardService.doSave();
  }

  doCreate() {
    if ((this.newTileName || '').length > 0) {
      const newTile = new Tile(this.newTileName, false)
      this.gameboardService.currentBoard.tiles.push(newTile)
      this.newTileName = undefined
      this.gameboardService.doSave();
    }
  }

  doRemoveTile(i: number) {
    if (confirm("Are you sure you want to delete '" + this.gameboardService.currentBoard.tiles[i].title + "'")) {
      this.gameboardService.currentBoard.tiles.splice(i,1);
      this.gameboardService.doSave();
    }
  }

}
