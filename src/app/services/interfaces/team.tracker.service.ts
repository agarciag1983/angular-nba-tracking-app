import { Observable } from "rxjs";
import { ITeam } from "src/app/model/team";

export interface ITeamTrackerService {
    getAllTeams(): Observable<ITeam[]>;
    findTeamById(teamId: number): Observable<ITeam>;
    getTrackedTeams(): Observable<ITeam[]>;

    addTeam(teamId: number): void;
    removeTeam(teamId: number): void;
}