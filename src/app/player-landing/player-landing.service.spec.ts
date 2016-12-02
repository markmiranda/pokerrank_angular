/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlayerLandingService } from './player-landing.service';

describe('PlayerLandingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerLandingService]
    });
  });

  it('should ...', inject([PlayerLandingService], (service: PlayerLandingService) => {
    expect(service).toBeTruthy();
  }));
});
