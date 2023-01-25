import { Pipe, PipeTransform } from '@angular/core';
import { ITeam } from 'src/app/model/team';
import { NbaService } from 'src/app/services/nba.service';

@Pipe({
  name: 'teamConference'
})
export class TeamConferencePipe implements PipeTransform {

  constructor(private nbaService: NbaService) {}

  transform(value?: ITeam): string | undefined {
    if(!value) {
      return undefined;
    }

    const conference = this.nbaService.teamConference(value);
    return `${conference} conference`;
  }

}
