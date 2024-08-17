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
    this.gameboardService.currentBoard.doCheckForBingo();
    this.gameboardService.doSave();
  }

  doHideBingo() {
      this.gameboardService.currentBoard.isBingo = false;
  }

  doClear() {
    if (confirm("Clear Board will uncheck all checked board tiles. Do you want to continue?")) {
      this.gameboardService.currentBoard.doClearSelected();
      this.gameboardService.doSave();
    }
  }

  doRandomize() {
    if (confirm("Clear board and randomize available tiles and placement?")) {
      this.gameboardService.currentBoard.doClearSelected();
      this.gameboardService.currentBoard.doRandomizeRows();
      console.log(this.gameboardService.currentBoard);
    }
  }
}
