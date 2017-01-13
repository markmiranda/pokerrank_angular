import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PlayerDetailService } from './player-detail.service';
import { Player } from './player.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  providers: [PlayerDetailService]
})
export class PlayerComponent implements OnInit {
  id: number;
  player: Player = {};

  constructor(
    private playerDetailService: PlayerDetailService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getPlayer(this.id);
    });
  }

  getPlayer(id) {
    return this.playerDetailService.get(id).then(player => {
      this.player = player;
      console.log(this.player)
    });
  }

}
