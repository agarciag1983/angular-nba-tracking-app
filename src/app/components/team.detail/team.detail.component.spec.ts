import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDetailComponent } from './team.detail.component';
import { NbaService } from 'src/app/services/nba.service';
import { GameServiceProvider } from 'src/app/team/team.provider';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EnvironmentProvider } from 'src/app/app.provider';
import { LoggerService } from 'src/app/services/logger.service';

describe('TeamDetailComponent', () => {
  let component: TeamDetailComponent;
  let fixture: ComponentFixture<TeamDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        TeamDetailComponent 
      ],
      imports: [
        HttpClientTestingModule
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

    fixture = TestBed.createComponent(TeamDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
