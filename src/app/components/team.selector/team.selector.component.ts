import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ITeam } from 'src/app/model/team';

@Component({
  selector: 'nba-team-selector',
  templateUrl: './team.selector.component.html',
  styleUrls: ['./team.selector.component.css']
})
export class TeamSelectorComponent {
  @Input() teams$: Observable<ITeam[]> | undefined;
  @Output() onSelected: EventEmitter<number> = new EventEmitter();

  teamFormGroup: FormGroup = new FormGroup({
    teamSelect: new FormControl('', Validators.required),
  });

  onSubmit(): void {
    if(!this.teamFormGroup.valid) {
      return;
    }

    this.onSelected.emit(+this.teamFormGroup.value.teamSelect);
  }  
}
