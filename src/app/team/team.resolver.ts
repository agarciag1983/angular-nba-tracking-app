import { Inject, Injectable } from '@angular/core';
import {
  Router, Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { ITeam, UnknowTeam } from '../model/team';
import { ITeamService } from '../services/interfaces/team.service';
import { LoggerService } from '../services/logger.service';

@Injectable({
  providedIn: 'root'
})
export class TeamResolver implements Resolve<ITeam> {

  constructor(
    @Inject("TeamService") private teamService: ITeamService, 
    private router: Router,
    private loggerService: LoggerService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<ITeam> {
    const abbreviation: string | null = route.paramMap.get('teamCode');
    if(!abbreviation) {
      this.router.navigate(['/']);
      this.loggerService.error('Team Code does not exists.');

      return of(new UnknowTeam());
    }

    return this.teamService.findByAbbreviation(abbreviation).pipe(
      map(team => {
        if(team instanceof UnknowTeam) {
          this.router.navigate(['/']);
          this.loggerService.error('Team does not exists.');
        }

        return team;
      })
    );
  }
}
