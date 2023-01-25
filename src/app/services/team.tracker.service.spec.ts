import { TestBed } from '@angular/core/testing';

import { TeamTrackerService } from './team.tracker.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from './logger.service';
import { EnvironmentProvider } from '../app.provider';
import { TeamServiceProvider } from '../team/team.provider';

describe('TeamTrackerService', () => {
  let service: TeamTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        HttpClient,
        LoggerService,
        TeamServiceProvider,
        EnvironmentProvider
      ]
    });
    service = TestBed.inject(TeamTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
