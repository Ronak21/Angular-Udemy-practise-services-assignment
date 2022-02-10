import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class UserService{
    private activeUsers = ['Max', 'Anna'];
    private inactiveUsers = ['Chris', 'Manu'];

    constructor(private counterService: CounterService) {}

    setInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.incrementActiveToInactive();
    }

    setActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.incrementInactiveToActive();
    }

    getActiveUsers(){
        return this.activeUsers; 
    }

    getInactiveUsers() {
        return this.inactiveUsers
    }
}