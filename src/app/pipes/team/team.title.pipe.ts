import { Pipe, PipeTransform } from '@angular/core';
import { ITeam } from 'src/app/model/team';

@Pipe({
  name: 'teamTitle'
})
export class TeamTitlePipe implements PipeTransform {

  transform(value?: ITeam, showAbbreviation: boolean = true): string {
    return `${value?.full_name} ${showAbbreviation ? `[${value?.abbreviation}]` : ''}`;
  }

}
