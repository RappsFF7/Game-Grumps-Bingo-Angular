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
  boards: Gameboard[];

  constructor(public gameboardService: GameboardService, public router: Router) { 
    this.gameboardService = gameboardService;
    this.boards = gameboardService.boards;
  }

  ngOnInit(): void {
  }

  doRemoveGameboard(i: number) {
    this.boards.splice(i,1);
  }

  setCurrentGameboard(i: number) {
    this.gameboardService.currentBoard = this.gameboardService.boards[i];
    this.router.navigate(['/']);
  }

}
