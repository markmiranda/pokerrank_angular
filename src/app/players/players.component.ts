import { Component, OnInit } from '@angular/core';

import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
  providers: [PlayerService]
})
export class PlayersComponent implements OnInit {

  players: Player[];

  constructor( private playerService: PlayerService ) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    this.playerService.getPlayers().then( players => this.players = players )
  }

}
