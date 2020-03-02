import { Component, OnInit, Input } from '@angular/core';
import { GameboardService } from '../../services/gameboard.service';
import { Gameboard } from '../../models/gameboard';
import { Tile } from '../../models/tile';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  board: Gameboard;

  constructor(gameboardService: GameboardService) { 
    this.board = gameboardService.currentBoard;
  }

  ngOnInit(): void {
  }

  doRemoveTile(i: number) {
    this.board.tiles.splice(i,1);
  }

}
