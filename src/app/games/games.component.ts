import { Component, OnInit } from '@angular/core';
import { GameLandingService } from '../game-landing/game-landing.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  providers: [GameLandingService]
})
export class GamesComponent implements OnInit {
  private games;

  constructor(private gameService: GameLandingService) { }

  ngOnInit() {
    this.getGames();
  }

  getGames() {
    return this.gameService.get(false).then(games => {
      this.games = games;
    });
  }

}
