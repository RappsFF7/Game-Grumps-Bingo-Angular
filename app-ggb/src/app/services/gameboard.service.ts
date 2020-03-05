import { Injectable } from '@angular/core';
import { Gameboard } from '../models/gameboard';

import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class GameboardService {
  public boards: Gameboard[];
  public currentBoard: Gameboard;

  constructor() {
    this.doLoad();
  }

  public doSave() {
    // Save gameboards in local storage
    if (localStorage) {
      var dataStr = btoa(JSON.stringify(this.boards))
      localStorage.boards = dataStr;
    }
  }

  public doLoad() {
    // Load saved gameboards from local storage
    if (localStorage) {
      var dataStr = (localStorage.boards ? atob(localStorage.boards) : undefined);
      var dataObj = (dataStr ? (<[]>JSON.parse(dataStr)).map(g => $.extend(new Gameboard(), g)) : undefined);
      this.boards = (dataObj ? dataObj : undefined);
    }

    // Generate some default gameboards if none are in local storage (or local storage is unavailable)
    if (!this.boards) {
      this.boards = [Gameboard.generateDefaultBoard()];
      
      var secondBoard = Gameboard.generateDefaultBoard();
      secondBoard.name = "Power Hour 2!";
      this.boards.push(secondBoard);
    }
    
    // Set the current board
    if (!!this.boards) {
      this.currentBoard = this.boards[0];
    }
  }
}
