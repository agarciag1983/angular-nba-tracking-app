import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITeam } from 'src/app/model/team';
import { ITeamTrackerService } from 'src/app/services/interfaces/team.tracker.service';

@Component({
  selector: 'nba-team-tracker',
  templateUrl: './team.tracker.component.html',
  styleUrls: ['./team.tracker.component.css']
})
export class TeamTrackerComponent implements OnInit {

  teams$!: Observable<ITeam[]>;
  trackedTeams$!: Observable<ITeam[]>;

  constructor(@Inject("TeamTrackerService") private teamTrackerService: ITeamTrackerService) {}

  ngOnInit(): void {
    this.teams$ = this.teamTrackerService.getAllTeams(); 
    this.trackedTeams$ = this.teamTrackerService.getTrackedTeams();   
  }

  onSelectedTeam(teamId: number): void{
    this.teamTrackerService.addTeam(teamId);
  }

  onRemovedTeam(teamId: number): void {
    this.teamTrackerService.removeTeam(teamId);
  }
  
}
