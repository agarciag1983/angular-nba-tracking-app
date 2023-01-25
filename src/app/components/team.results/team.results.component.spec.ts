import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamResultsComponent } from './team.results.component';
import { GameServiceProvider } from 'src/app/team/team.provider';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { EnvironmentProvider } from 'src/app/app.provider';
import { LoggerService } from 'src/app/services/logger.service';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TeamTitlePipe } from 'src/app/pipes/team/team.title.pipe';
import { TeamConferencePipe } from 'src/app/pipes/team/team.conference.pipe';
import { NbaService } from 'src/app/services/nba.service';

describe('TeamResultsComponent', () => {
  let component: TeamResultsComponent;
  let fixture: ComponentFixture<TeamResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        TeamTitlePipe,
        TeamConferencePipe,
        TeamResultsComponent 
      ],
      imports: [
        RouterModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [ 
        HttpClient,
        NbaService,
        LoggerService,
        GameServiceProvider,
        EnvironmentProvider,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
