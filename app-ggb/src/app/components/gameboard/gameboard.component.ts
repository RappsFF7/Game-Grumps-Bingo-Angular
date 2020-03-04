import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Gameboard } from '../../models/gameboard';
import { GameboardService } from '../../services/gameboard.service';
import { Tile } from '../../models/tile';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {
  constructor(public route: ActivatedRoute, public ref: ChangeDetectorRef, public gameboardService: GameboardService) {
    gameboardService.currentBoard.doRandomizeRows(true);
  }

  ngOnInit(): void {
    // Load a custom board from the URL if provided
    let serializedBoard = this.route.snapshot.paramMap.get('serializedBoard');
    if (serializedBoard) {
      this.gameboardService.currentBoard = Gameboard.fromSerialized(serializedBoard);
    }
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
