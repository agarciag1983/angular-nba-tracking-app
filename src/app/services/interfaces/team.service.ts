import { Observable } from "rxjs";
import { ITeam } from "src/app/model/team";

export interface ITeamService {
    getAll(): Observable<ITeam[]>;    
    findById(teamId: number): Observable<ITeam>;
    findByAbbreviation(abbreviation: string): Observable<ITeam>;
}