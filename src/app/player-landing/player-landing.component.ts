import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PlayerLandingService } from './player-landing.service';

import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-landing',
  templateUrl: './player-landing.component.html',
  styleUrls: ['./player-landing.component.scss'],
  providers: [PlayerLandingService]
})
export class PlayerLandingComponent implements OnInit {
  players: Player[] =[];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.getPlayers().then(players => this.players = players.slice(1,5));
  }
}
