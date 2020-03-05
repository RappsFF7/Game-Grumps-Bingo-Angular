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
  constructor(public gameboardService: GameboardService) { 
  }

  ngOnInit(): void {
  }

  doUpdate() {
    this.gameboardService.doSave();
  }

  doRemoveTile(i: number) {
    this.gameboardService.currentBoard.tiles.splice(i,1);
  }

}
