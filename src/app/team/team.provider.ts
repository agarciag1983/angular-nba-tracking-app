import { Provider } from "@angular/core";
import { TeamService } from "../services/team.service";
import { GameService } from "../services/game.service";
import { TeamResolver } from "./team.resolver";
import { TeamTrackerService } from "../services/team.tracker.service";

export const TeamProvider: Provider = { provide: TeamResolver }
export const TeamServiceProvider: Provider = { provide: "TeamService", useClass: TeamService }
export const GameServiceProvider: Provider = { provide: "GameService", useClass: GameService }
export const TeamTrackerServiceProvider: Provider = { provide: "TeamTrackerService", useClass: TeamTrackerService }