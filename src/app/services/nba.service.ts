import { Injectable } from '@angular/core';
import { ITeam } from '../model/team';
import { IGame } from '../model/game';

@Injectable({
  providedIn: 'root'
})
export class NbaService {

  public teamConference(team: ITeam): 'Western' | 'Esatern' {
      return team.conference === 'West' ? 'Western' : 'Esatern';
  }

  public teamWinner(game: IGame): ITeam {
    return game.home_team_score > game.visitor_team_score ? game.home_team : game.visitor_team;
  }

  public isTeamWonGame(team: ITeam, game: IGame): boolean {
    const teamWinner: ITeam = this.teamWinner(game);
    return team.id === teamWinner.id;
  }

  public teamWonStatus(team: ITeam, game: IGame): 'W' | 'L' {
    const isWonGame: boolean = this.isTeamWonGame(team, game);
    return isWonGame ? 'W' : 'L';
  }

  public winnerScores(game: IGame): number {
    return game.home_team_score > game.visitor_team_score ? game.home_team_score : game.visitor_team_score;
  }

  public teamTotalScoredPoints(team: ITeam, games: IGame[]): number {
    let totalScores: number = 0;    
    games.forEach(game => {
      totalScores += team.id == game.home_team.id ? game.home_team_score : game.visitor_team_score;
    });

    return totalScores;
  }

  public teamTotalConcededPoints(team: ITeam, games: IGame[]): number {
    let totalConceded: number = 0;    
    games.forEach(game => {
      totalConceded += team.id == game.home_team.id ? game.visitor_team_score : game.home_team_score;
    });

    return totalConceded;
  }
  
}
