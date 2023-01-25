import { TestBed } from '@angular/core/testing';

import { GameService } from './game.service';
import { HttpClient } from '@angular/common/http';
import { EnvironmentProvider } from '../app.provider';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoggerService } from './logger.service';

describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        HttpClient,
        LoggerService,
        EnvironmentProvider,
      ]
    });

    service = TestBed.inject(GameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
