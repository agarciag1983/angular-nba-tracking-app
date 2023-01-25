import { Component, Inject } from '@angular/core';
import { IEnvironment } from './model/environment';
import { ENVIRONMENT_TOKEN } from './app.provider';

@Component({
  selector: 'nba-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'nba-score-tracking';
  currentDate: Date = new Date();

  constructor(@Inject(ENVIRONMENT_TOKEN) environment: IEnvironment) {
    this.title = environment.applicationTitle;
  }
}
