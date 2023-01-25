import { TestBed } from '@angular/core/testing';

import { TeamResolver } from './team.resolver';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TeamServiceProvider } from './team.provider';
import { LoggerService } from '../services/logger.service';
import { RouterModule } from '@angular/router';
import { EnvironmentProvider } from '../app.provider';

describe('TeamResolver', () => {
  let resolver: TeamResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [
        HttpClient,
        LoggerService,
        TeamServiceProvider,
        EnvironmentProvider
      ]
    });

    resolver = TestBed.inject(TeamResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
