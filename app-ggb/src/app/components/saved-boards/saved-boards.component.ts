import { Component, OnInit } from '@angular/core';
import { Gameboard } from 'src/app/models/gameboard';
import { GameboardService } from 'src/app/services/gameboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saved-boards',
  templateUrl: './saved-boards.component.html',
  styleUrls: ['./saved-boards.component.css']
})
export class SavedBoardsComponent implements OnInit {
  constructor(public gameboardService: GameboardService, public router: Router) { 
  }

  ngOnInit(): void {
  }

  doUpdate(i: number) {
    this.gameboardService.doSave();
  }

  doRemoveGameboard(i: number) {
    this.gameboardService.boards.splice(i,1);
  }

  setCurrentGameboard(i: number) {
    this.gameboardService.currentBoard = this.gameboardService.boards[i];
    this.router.navigate(['/']);
  }

}
