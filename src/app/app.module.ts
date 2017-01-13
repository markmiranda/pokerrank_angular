import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { PlayerLandingComponent } from './player-landing/player-landing.component';
import { PlayersComponent } from './players/players.component';
import { GamesComponent } from './games/games.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { GameLandingComponent } from './game-landing/game-landing.component';
import { SeasonLandingComponent } from './season-landing/season-landing.component';
import { NewGameComponent } from './new-game/new-game.component';


const routes: Routes = [
  { path: 'players', component: PlayersComponent },
  { path: 'games', component: GamesComponent },
  { path: 'seasons', component: SeasonsComponent },
  { path: 'newGame', component: NewGameComponent },
  { path: '', component: LandingComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    PlayerLandingComponent,
    PlayersComponent,
    GamesComponent,
    SeasonsComponent,
    GameLandingComponent,
    SeasonLandingComponent,
    NewGameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
