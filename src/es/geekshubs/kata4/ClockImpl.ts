import { Clock } from "./Clock";

export class ClockImpl implements Clock {

    constructor() { }

    getDateNow(): string {
        return new Date().toLocaleString()
    }
}