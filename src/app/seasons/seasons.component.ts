import { Component, OnInit } from '@angular/core';
import { SeasonLandingService } from '../season-landing/season-landing.service';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  providers: [SeasonLandingService]
})
export class SeasonsComponent implements OnInit {
  private seasons;

  constructor(private seasonService: SeasonLandingService) { }

  ngOnInit() {
    this.getSeasons();
  }

  getSeasons() {
    return this.seasonService.get(false).then(seasons => {
      this.seasons = seasons;
    });
  }

}
