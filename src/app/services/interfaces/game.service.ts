import { Observable } from "rxjs";
import { IGame } from "src/app/model/game";

export interface IGameService {
    getLastResults(teamId: number, lastDayCount: number): Observable<IGame[]>;    
}