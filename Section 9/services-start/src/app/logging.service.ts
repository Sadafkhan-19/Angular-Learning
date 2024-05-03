// import { Inject } from "@angular/core";
import { AccountsService } from "./account/account.service";

export class LoggingService {
    // @Inject(AccountsService)
    logStatusChange(status:string) {
        console.log('A server status changed, new status: ' + status);
    }
}