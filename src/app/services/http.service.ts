import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";
import { EMPTY, Observable, catchError, map } from "rxjs";
import { IEnvironment } from "../model/environment";
import { IResponse } from "../model/response";
import { ENVIRONMENT_TOKEN } from "../app.provider";

@Injectable({
    providedIn: 'root'
})
export abstract class HttpService {

    constructor(
        protected http: HttpClient,
        @Inject(ENVIRONMENT_TOKEN) protected environment: IEnvironment,
        protected loggerService: LoggerService) { }
    
    protected get<T>(url: string, params?: HttpParams) : Observable<T> {
        return this.http.get<IResponse<T>>(
            url,
            {
                params: params,
                headers: this.environment.endpoint.nbaApiHeaderKeys
            }
        ).pipe(
            map(respone => {
                return respone.data;
            }),
            catchError(error => {
                this.onHttpError(error);
                return EMPTY;
            })
        )
    }

    protected onHttpError(error: HttpErrorResponse): void {
        this.loggerService.error(error.message);
    }
}