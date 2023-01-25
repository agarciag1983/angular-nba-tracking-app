import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTrackerComponent } from './team.tracker.component';
import { TeamServiceProvider, TeamTrackerServiceProvider } from 'src/app/team/team.provider';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EnvironmentProvider } from 'src/app/app.provider';
import { LoggerService } from 'src/app/services/logger.service';
import { TeamSelectorComponent } from '../team.selector/team.selector.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('TeamTrackerComponent', () => {
  let component: TeamTrackerComponent;
  let fixture: ComponentFixture<TeamTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        TeamTrackerComponent,
        TeamSelectorComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      providers: [
        HttpClient,
        LoggerService,
        EnvironmentProvider,
        TeamServiceProvider,
        TeamTrackerServiceProvider,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
