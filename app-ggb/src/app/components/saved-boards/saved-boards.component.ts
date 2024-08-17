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
  newGameboardName: string

  constructor(public gameboardService: GameboardService, public router: Router) { 
  }

  ngOnInit(): void {
  }

  doUpdate(i: number) {
    this.gameboardService.doSave();
  }

  doCreate() {
    if ((this.newGameboardName || '').length > 0) {
      const newBoard = Gameboard.new(this.gameboardService.currentBoard)
      newBoard.name = this.newGameboardName
      this.gameboardService.boards.push(newBoard)
      this.gameboardService.doSave();
      this.newGameboardName = undefined
    }
  }

  doRemoveGameboard(i: number) {
    if (confirm("Are you sure you want to delete the '" + this.gameboardService.boards[i].name + "' board?")) {
      this.gameboardService.boards.splice(i,1);
      this.gameboardService.doSave();
    }
  }

  setCurrentGameboard(i: number) {
    this.gameboardService.currentBoard = this.gameboardService.boards[i];
    this.router.navigate(['/']);
  }

}
