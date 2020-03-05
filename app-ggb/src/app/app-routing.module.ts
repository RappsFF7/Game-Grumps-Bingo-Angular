import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameboardComponent } from './components/gameboard/gameboard.component';
import { ConfigComponent } from './components/config/config.component';
import { SavedBoardsComponent } from './components/saved-boards/saved-boards.component';
import { ShareComponent } from './components/share/share.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  { path: '', redirectTo: '/gameboard', pathMatch: 'full' },
  { path: 'gameboard', component: GameboardComponent },
  { path: 'gameboard/:serializedBoard', component: GameboardComponent },
  { path: 'config', component: ConfigComponent },
  { path: 'saved-boards', component: SavedBoardsComponent },
  { path: 'share', component: ShareComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
