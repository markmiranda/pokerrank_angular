import { Component, OnInit } from '@angular/core';
import { PlayerService } from './player.service'

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  providers: [PlayerService]
})
export class PlayersComponent implements OnInit {
  private players;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    return this.playerService.get().then(players => {
      this.players = players;
    });
  }
}
