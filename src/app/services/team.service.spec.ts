import { TestBed } from '@angular/core/testing';
import { TeamService } from './team.service';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from './logger.service';
import { EnvironmentProvider } from '../app.provider';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TeamService', () => {
  let service: TeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        HttpClient,
        LoggerService,
        EnvironmentProvider
      ]
    });
    service = TestBed.inject(TeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
