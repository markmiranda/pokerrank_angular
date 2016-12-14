import { Component, OnInit } from '@angular/core';

import { GameLandingService } from './game-landing.service';

@Component({
  selector: 'app-game-landing',
  templateUrl: './game-landing.component.html',
  styleUrls: ['./game-landing.component.scss'],
  providers: [GameLandingService]
})
export class GameLandingComponent implements OnInit {
  private games;

  constructor(private gameLandingService: GameLandingService) { }

  ngOnInit() {
    this.getGames();
  }

  getGames() {
    return this.gameLandingService.get().then(games =>{
      this.games = games;
    });
  }

}
