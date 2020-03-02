import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameboardComponent } from './components/gameboard/gameboard.component';
import { ConfigComponent } from './components/config/config.component';


const routes: Routes = [
  { path: '', redirectTo: '/gameboard', pathMatch: 'full' },
  { path: 'gameboard', component: GameboardComponent },
  { path: 'config', component: ConfigComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
