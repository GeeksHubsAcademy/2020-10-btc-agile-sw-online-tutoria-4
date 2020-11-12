import { _Console } from "./_Console"

export class _ConsoleImpl implements _Console {

    constructor() {

    }
    
    log(args: string): void {
        console.log(args)
    }

    error(args: string): void {
        console.error(args)
    }
    
}