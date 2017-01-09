import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PlayerLandingService } from './player-landing.service';

@Component({
  selector: 'app-player-landing',
  templateUrl: './player-landing.component.html',
  providers: [PlayerLandingService]
})
export class PlayerLandingComponent implements OnInit {
  private players;

  constructor(private playerLandingService: PlayerLandingService) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    return this.playerLandingService.get(true).then(players => {
      this.players = players;
    });
  }

}
