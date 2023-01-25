import { Inject, Injectable } from '@angular/core';
import { ITeamTrackerService } from './interfaces/team.tracker.service';
import { BehaviorSubject, Observable, Subject, combineLatest, combineLatestAll, forkJoin, map, mergeMap } from 'rxjs';
import { ITeam } from '../model/team';
import { TeamService } from './team.service';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class TeamTrackerService implements ITeamTrackerService {

  private addedTeamIds: number[] = [];

  private teamTrackerSubject = new BehaviorSubject<number[]>([]);
  private teamTracker$ = this.teamTrackerSubject.asObservable();

  constructor(
    @Inject("TeamService") private teamService: TeamService,
    private loggerService: LoggerService) {
  }

  getAllTeams(): Observable<ITeam[]> {
    return this.teamService.getAll();
  }
  findTeamById(teamId: number): Observable<ITeam> {
    return this.teamService.findById(teamId);
  }
  getTrackedTeams(): Observable<ITeam[]> {
    return combineLatest([
      this.getAllTeams(),
      this.teamTracker$
    ]).pipe(
      map(([teams, tracker]) => {
        return teams.filter(team => tracker.some(id => team.id === id));
      })
    );
  }

  addTeam(teamId: number): void {
    const alreadyExistTeamId = this.addedTeamIds.some(id => id === teamId);
    if(alreadyExistTeamId) {
      return;
    }

    this.addedTeamIds.push(teamId);
    this.teamTrackerSubject.next(this.addedTeamIds);
  }
  removeTeam(teamId: number): void{
    const teamIndex = this.addedTeamIds.indexOf(teamId);
    if(teamIndex < 0) {
      return;
    }

    this.addedTeamIds.splice(teamIndex, 1);
    this.teamTrackerSubject.next(this.addedTeamIds);
  }
  
}
