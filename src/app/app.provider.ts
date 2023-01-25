import { InjectionToken, Provider } from "@angular/core";
import { IEnvironment } from "./model/environment";
import { environment } from "./environment/environment";
import { LoggerService } from "./services/logger.service";
import { NbaService } from "./services/nba.service";

export const ENVIRONMENT_TOKEN = new InjectionToken<IEnvironment>('ENVIRONMENT_TOKEN');

export const NBAProvider: Provider = { provide: NbaService }
export const LogginProvider: Provider = { provide: LoggerService }
export const EnvironmentProvider: Provider = { provide: ENVIRONMENT_TOKEN, useValue: environment }