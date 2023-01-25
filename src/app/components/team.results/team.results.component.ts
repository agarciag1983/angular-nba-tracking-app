import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, map, mergeMap, of } from 'rxjs';
import { ENVIRONMENT_TOKEN } from 'src/app/app.provider';
import { IEnvironment } from 'src/app/model/environment';
import { IGame } from 'src/app/model/game';
import { ITeam, UnknowTeam } from 'src/app/model/team';
import { IGameService } from 'src/app/services/interfaces/game.service';

@Component({
  selector: 'nba-team.results',
  templateUrl: './team.results.component.html',
  styleUrls: ['./team.results.component.css']
})
export class TeamResultsComponent {
  team?: ITeam;
  games?: IGame[];
  routeSubscription!: Subscription;

  constructor(
    @Inject("GameService") private gameService: IGameService,
    @Inject(ENVIRONMENT_TOKEN) protected environment: IEnvironment,
    private route: ActivatedRoute,
    private router: Router) {}

    ngOnInit(): void {
      this.subscribeTeamFromRoute();
    }

    private subscribeTeamFromRoute(): void {
      this.routeSubscription = this.route.data.pipe(
        map(data => {
          this.team = data['team'] ?? new UnknowTeam();
          return this.team;
        }),
        mergeMap(team => {
          if(!team || team instanceof UnknowTeam) {
            return of([]);
          }

          return this.gameService.getLastResults(team.id, this.environment.endpoint.teamGameDaysShow)
        })
      )
      .subscribe({
        next: games => {
          this.games = games
        }
      });
    }

    onGoBack(): void {
      this.router.navigate(['/']);
    }

    ngOnDestroy(): void {
      this.routeSubscription?.unsubscribe();
    }
}
