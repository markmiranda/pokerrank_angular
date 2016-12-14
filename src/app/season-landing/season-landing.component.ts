import { Component, OnInit } from '@angular/core';
import { SeasonLandingService } from './season-landing.service';

@Component({
  selector: 'app-season-landing',
  templateUrl: './season-landing.component.html',
  styleUrls: ['./season-landing.component.scss'],
  providers: [SeasonLandingService]
})
export class SeasonLandingComponent implements OnInit {
  private seasons;

  constructor(private seasonLandingService: SeasonLandingService) {

  }

  ngOnInit() {
    this.getSeasons();
  }

  getSeasons() {
    return this.seasonLandingService.get().then(seasons => {
      this.seasons = seasons;
    });
  }

}
