import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EnvironmentProvider, LogginProvider } from '../app.provider';
import { GameServiceProvider } from '../team/team.provider';
import { LoggerService } from './logger.service';
import { CommonModule } from '@angular/common';

describe('HttpService', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        HttpClientTestingModule
      ],
      providers: [
        HttpClient,
        LoggerService,
        GameServiceProvider,
        EnvironmentProvider,
      ]
    });

    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
