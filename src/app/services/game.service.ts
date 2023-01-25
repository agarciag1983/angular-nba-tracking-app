import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IGame } from '../model/game';
import { HttpService } from './http.service';
import { HttpParams } from '@angular/common/http';
import { IGameService } from './interfaces/game.service';

@Injectable({
  providedIn: 'root'
})
export class GameService extends HttpService implements IGameService {

  private lastResultParameters(teamId: number, lastDayCount: number): HttpParams {
    let params = new HttpParams();
    params = params.append('team_ids[]', teamId);

    if(lastDayCount < 0) {
      return params;
    }

    let currentDate = new Date();
    for(let i = 0; i < lastDayCount; i++) {
      currentDate = new Date(currentDate.setDate(currentDate.getDate() - 1));
      params = params.append('dates[]', currentDate.toDateString());
    }

    return params;
  }

  getLastResults(teamId: number, lastDayCount: number): Observable<IGame[]> {
    const params = this.lastResultParameters(teamId, lastDayCount);
    return this.get<IGame[]>(`${this.environment.endpoint.nbaApiHost}/games`, params).pipe(
      map(games => {
        return games.sort((first, second) => {
          return new Date(second.date).getTime() - new Date(first.date).getTime()
        });
      })
    );
  }
}
