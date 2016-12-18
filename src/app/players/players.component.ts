import { Component, OnInit } from '@angular/core';
import { PlayerLandingService } from '../player-landing/player-landing.service'

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  providers: [PlayerLandingService]
})
export class PlayersComponent implements OnInit {
  private players;

  constructor(private playerService: PlayerLandingService) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    return this.playerService.get(false).then(players => {
      this.players = players;
    });
  }
}
