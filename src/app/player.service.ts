import { Injectable } from '@angular/core';

import { Player } from './player';
import { PLAYERS } from './players-mock';

@Injectable()
export class PlayerService {
  getPlayers(): Promise<Player[]> {
    return Promise.resolve(PLAYERS);
  }
}
