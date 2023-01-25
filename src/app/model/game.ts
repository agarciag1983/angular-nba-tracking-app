import { ITeam } from "./team";

export interface IGame {
    id: number;
    date: Date;
    home_team: ITeam;
    home_team_score: number;
    period: 4;
    postseason: boolean;
    season: number;
    status: string;
    time: string;
    visitor_team: ITeam;
    visitor_team_score: number;
}