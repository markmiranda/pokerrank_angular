import { Injectable, OnInit } from '@angular/core';

import { Player } from '../player';
import { PlayerService } from '../player.service';

// let players = [
//   { id: 1, name: 'Michael C.', score: '7.342', number_of_games: '1', top_three: '0' },
//   { id: 2, name: 'Andy B.', score: '6.322', number_of_games: '1', top_three: '1' },
//   { id: 3, name: 'Tyler M.', score: '6.244', number_of_games: '1', top_three: '0' },
//   { id: 4, name: 'Mark M.', score: '5.436', number_of_games: '1', top_three: '0' },
//   { id: 5, name: 'Jonathan M.', score: '1.787', number_of_games: '1', top_three: '1' }
// ]

@Injectable()
export class PlayerLandingService implements OnInit {
  players: Player[];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.getPlayers().then(players => this.players = players);
  }
}
