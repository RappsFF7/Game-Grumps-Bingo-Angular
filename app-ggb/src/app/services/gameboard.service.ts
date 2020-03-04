import { Injectable } from '@angular/core';
import { Gameboard } from '../models/gameboard';

@Injectable({
  providedIn: 'root'
})
export class GameboardService {
  public boards: Gameboard[];
  public currentBoard: Gameboard;

  constructor() {
    this.boards = [Gameboard.generateDefaultBoard()];
    this.currentBoard = this.boards[0];
    
    var secondBoard = Gameboard.generateDefaultBoard();
    secondBoard.name = "Power Hour 2!";
    this.boards.push(secondBoard);
  }

  public doSave() {
    
  }

  public doLoad() {

  }
}
