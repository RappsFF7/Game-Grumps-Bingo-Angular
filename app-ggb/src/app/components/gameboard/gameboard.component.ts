import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Gameboard } from '../../models/gameboard';
import { GameboardService } from '../../services/gameboard.service';
import { Tile } from '../../models/tile';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {
  board: Gameboard;

  constructor(public route: ActivatedRoute, public ref: ChangeDetectorRef, public gameboardService: GameboardService) {
    this.board = gameboardService.currentBoard;
    this.board.doRandomizeRows();
   }

  ngOnInit(): void {
    // TODO needs to update the current board (but replacing it will lose reference in other components)
    this.route.paramMap.pipe(switchMap((params) => 
      new Observable<Gameboard>((observer) => observer.next(Gameboard.fromSerialized(params.get('serializedBoard')))
    ))).subscribe((gameboard) => {
      this.board = (gameboard ? gameboard : this.gameboardService.currentBoard)
    });
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
