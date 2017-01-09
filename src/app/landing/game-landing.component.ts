import { Component, OnInit } from '@angular/core';

import { GameLandingService } from './game-landing.service';

@Component({
  selector: 'app-game-landing',
  templateUrl: './game-landing.component.html',
  providers: [GameLandingService]
})
export class GameLandingComponent implements OnInit {
  private games;

  constructor(private gameLandingService: GameLandingService) { }

  ngOnInit() {
    this.getGames();
  }

  getGames() {
    return this.gameLandingService.get(true).then(games =>{
      this.games = games;
    });
  }

}
