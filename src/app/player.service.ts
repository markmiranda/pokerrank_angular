import { Injectable } from '@angular/core';

import { Player } from './player';
import { PLAYERS } from './players-mock';

@Injectable()
export class PlayerService {
  getPlayers(): Promise<Player[]> {
    return Promise.resolve(PLAYERS);
  }

  getPlayer(name: string): Promise<Player> {
    return this.getPlayers()
      .then(players => players.find(player => player.name === name))
  }
}
