import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamRouting } from './team.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeamTitlePipe } from '../pipes/team/team.title.pipe';
import { TeamConferencePipe } from '../pipes/team/team.conference.pipe';
import { TeamDetailComponent } from '../components/team.detail/team.detail.component';
import { TeamSelectorComponent } from '../components/team.selector/team.selector.component';
import { TeamTrackerComponent } from '../components/team.tracker/team.tracker.component';
import { GameTeamResultPipe } from '../pipes/game/game.team.result.pipe';
import { GameServiceProvider, TeamProvider, TeamServiceProvider, TeamTrackerServiceProvider } from './team.provider';
import { TeamResultsComponent } from '../components/team.results/team.results.component';

@NgModule({
  declarations: [
    TeamTrackerComponent,
    TeamSelectorComponent,
    TeamDetailComponent,
    TeamTitlePipe,
    TeamConferencePipe,
    GameTeamResultPipe,
    TeamResultsComponent
  ],
  imports: [
    CommonModule,
    TeamRouting,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    TeamProvider,
    TeamServiceProvider,
    GameServiceProvider,
    TeamTrackerServiceProvider
  ]
})
export class TeamModule {}
