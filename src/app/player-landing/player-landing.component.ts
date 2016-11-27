import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from  '@angular/router';
import { Location } from '@angular/common';

import { PlayerService } from '../player.service';
import { Player } from '../player';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-player-landing',
  templateUrl: './player-landing.component.html',
  styleUrls: ['./player-landing.component.scss']
})
export class PlayerLandingComponent implements OnInit {

  @Input()
  player: Player;

  constructor(
    private playerService: PlayerService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.playerService.getPlayer(+params['id']))
      .subscribe(player => this.player = player);
  }

  goBack(): void {
    this.location.back();
  }

}
