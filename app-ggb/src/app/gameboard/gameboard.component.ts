import { Component, OnInit } from '@angular/core';
import { Gameboard } from '../gameboard';
import { GameboardService } from '../gameboard.service';
import { Tile } from '../tile';

import * as $ from 'jquery';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {
  board: Gameboard;

  constructor(gameboardService: GameboardService) {
    this.board = gameboardService.currentBoard;
    this.board.doRandomizeRows();
   }

  ngOnInit(): void {
  }

  onToggleSquare(sender: Tile) {
    sender.isSelected = !sender.isSelected;
  }

  /*
  init() {
    // Events
    $('#gameboard').on('change', '#gameboard-name', function () {
        GGB.savedBoards.data.forEach(el => el.default = false);
        GGB.gameboard.data = $(this).find(':selected').data('item');
        GGB.gameboard.data.default = true;
        GGB.savedBoards.doSave(GGB.gameboard.data);
        GGB.gameboard.doRefreshBody();
    });
  }

  doLoad(data) {
      GGB.gameboard.data = data;
      GGB.gameboard.doRefresh();
  }
  */
}
