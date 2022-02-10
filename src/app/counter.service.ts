export class CounterService{
    private activeToInactive: number = 0;
    private inactiveToActive: number = 0;

    incrementActiveToInactive() {
        this.activeToInactive++;
        console.log('Number of Active to Inactive transitions count = ' + this.activeToInactive);
    }

    incrementInactiveToActive() {
        this.inactiveToActive++;
        console.log('Number of Inactive to Active transitions count = ' + this.inactiveToActive);
    }
}