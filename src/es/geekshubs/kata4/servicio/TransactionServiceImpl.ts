import { _Console } from "./console/_Console";
import { Clock } from "./Utils/Clock/Clock";

import * as Collections from 'typescript-collections';
import { TransactionService } from "./TransactionService";
import { TransactionImpl } from "./model/TransactionImpl";

export class TransactionServiceImpl implements TransactionService{
    
    private list = new Collections.LinkedList<TransactionImpl>();

    constructor(public console:_Console) { }


    add(t: TransactionImpl): boolean {
        return this.list.add(t)
    }

    print(): void {
        throw new Error("Method not implemented.");
    }



}