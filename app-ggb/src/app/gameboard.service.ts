import { Injectable } from '@angular/core';
import { Gameboard } from './gameboard';

@Injectable({
  providedIn: 'root'
})
export class GameboardService {
  public currentBoard: Gameboard;

  constructor() { 
    this.currentBoard = Gameboard.getDefaultBoard();
  }
}
