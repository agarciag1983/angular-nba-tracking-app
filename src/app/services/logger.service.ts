import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LoggerService {

    private registerFriendlyDate(): string {
        const currentDate = new Date();
        return `${currentDate['getDate']()}/${currentDate['getMonth']() + 1}/${currentDate['getFullYear']()} ${currentDate['getHours']()}:${currentDate['getMinutes']()}:${currentDate['getSeconds']()}`;
    }

    log(message: string): void {
        console.log(`${this.registerFriendlyDate()}: ${message}`);
    }

    error(message: string): void {
        console.error(`${this.registerFriendlyDate()}: ${message}`);
    }

    info(message: string): void {
        console.info(`${this.registerFriendlyDate()}: ${message}`);
    }
}