import { Clock } from "../Utils/Clock/Clock";

export class TransactionImpl {
    constructor(public dateNow:String, public amount:number){ }

    public toString = () : string => {
        return `TransactionImpl (dateNow: ${this.dateNow}, amount: ${this.amount} )`;
    }
}