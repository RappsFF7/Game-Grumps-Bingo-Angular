import { Component, OnInit } from '@angular/core';
import { GameboardService } from 'src/app/services/gameboard.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {
  constructor(public gameboardService: GameboardService) { 
  }

  ngOnInit(): void {
  }

}
