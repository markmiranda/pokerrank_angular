/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlayersService } from './players.service';

describe('PlayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerService]
    });
  });

  it('should ...', inject([PlayerService], (service: PlayerService) => {
    expect(service).toBeTruthy();
  }));
});
