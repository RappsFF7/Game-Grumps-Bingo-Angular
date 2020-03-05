import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameboardService } from 'src/app/services/gameboard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isShowNavDropdown: boolean = false;

  constructor(public router: Router, public gameboardService: GameboardService) { }

  ngOnInit(): void {
  }

  public onToggleNav() {
    this.isShowNavDropdown = !this.isShowNavDropdown;
  }

  public onReset() {
      if (confirm("Reset will delete all saved gameboards and reload the page resetting the current config. Continue?")) {
          localStorage.clear();
          this.gameboardService.doLoad();
          this.gameboardService.currentBoard.doRandomizeRows(true);
          this.router.navigate(["/"]);
      }
  }

}
