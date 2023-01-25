import { Component, EventEmitter, Inject, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ENVIRONMENT_TOKEN } from 'src/app/app.provider';
import { IEnvironment } from 'src/app/model/environment';
import { IGame } from 'src/app/model/game';
import { ITeam } from 'src/app/model/team';
import { IGameService } from 'src/app/services/interfaces/game.service';
import { LoggerService } from 'src/app/services/logger.service';
import { NbaService } from 'src/app/services/nba.service';

@Component({
  selector: 'nba-team-detail',
  templateUrl: './team.detail.component.html',
  styleUrls: ['./team.detail.component.css']
})
export class TeamDetailComponent implements OnInit, OnDestroy {
  @Input() team: ITeam | undefined;
  @Output() onRemove: EventEmitter<number> = new EventEmitter<number>();

  games: IGame[] | undefined;
  avgScoredPoints!: number;
  avgConcededPoints!: number;

  gamesSubscription!: Subscription;

  constructor(
    private nbaService: NbaService,
    @Inject("GameService") private gameService: IGameService,
    @Inject(ENVIRONMENT_TOKEN) protected environment: IEnvironment,
    private router: Router,
    private loggerService: LoggerService
  ) { }
  
  ngOnInit(): void {
    
    if(!this.team) {
      return;
    }

    this.gamesSubscription = this.gameService
      .getLastResults(this.team.id, this.environment.endpoint.teamGameDaysShow)
      .subscribe({
        next: games => {
          this.games = games;

          const totalConcededPoints = this.nbaService.teamTotalConcededPoints(this.team!, games);
          this.avgConcededPoints = Math.round(totalConcededPoints / games.length);

          const totalScoredPoints = this.nbaService.teamTotalScoredPoints(this.team!, games);
          this.avgScoredPoints = Math.round(totalScoredPoints / games.length);
        }
      });
  }

  ngOnDestroy(): void {
    this.gamesSubscription?.unsubscribe();
  }

  onRemoveDetail(): void {
    if(!this.team) {
      return;
    }
    this.onRemove.emit(this.team.id);
  }

  onShowResult(): void {
    this.router.navigate([`results/${this.team?.abbreviation}`]);
  }

  isWonGame(game: IGame): boolean {
    return this.nbaService.isTeamWonGame(this.team!, game);
  }
}
