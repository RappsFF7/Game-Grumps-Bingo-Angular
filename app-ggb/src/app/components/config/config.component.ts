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
