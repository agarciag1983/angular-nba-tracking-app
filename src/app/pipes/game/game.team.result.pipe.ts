import { Pipe, PipeTransform } from '@angular/core';
import { IGame } from 'src/app/model/game';
import { ITeam } from 'src/app/model/team';
import { NbaService } from 'src/app/services/nba.service';

@Pipe({
  name: 'gameTeamResult'
})
export class GameTeamResultPipe implements PipeTransform {

  constructor(private nbaService: NbaService) {}

  transform(value: IGame, team: ITeam): 'W' | 'L' {
    return this.nbaService.teamWonStatus(team, value);
  }

}
