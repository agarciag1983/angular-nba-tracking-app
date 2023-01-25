import { Injectable } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { ITeam, UnknowTeam } from 'src/app/model/team';
import { HttpService } from 'src/app/services/http.service';
import { ITeamService } from './interfaces/team.service';

@Injectable({
  providedIn: 'root'
})
export class TeamService extends HttpService implements ITeamService {

  private teams$: Observable<ITeam[]> | undefined;

  getAll(): Observable<ITeam[]> {
    this.teams$ = this.teams$ ?? this.get<ITeam[]>(`${this.environment.endpoint.nbaApiHost}/teams`).pipe(
        map(teams => teams.map(team => ({
          ...team,
          logoUrl: `${this.environment.endpoint.nbaApiImagesHost}/${team.abbreviation}.png`
        }) as ITeam)),
        map(teams => {
          console.log(teams);
          return teams;
        }),
        shareReplay(1)
    );

    return this.teams$;
  }

  findById(teamId: number): Observable<ITeam> {
    return this.getAll().pipe(
      map(teams => {
        const team = teams.find(team => team.id === teamId);
        return team ?? new UnknowTeam()
      })
    );
  }

  findByAbbreviation(abbreviation: string): Observable<ITeam> {
    return this.getAll().pipe(
      map(teams => {
        const team = teams.find(team => team.abbreviation === abbreviation);
        return team ?? new UnknowTeam()
      })
    );
  }
}
