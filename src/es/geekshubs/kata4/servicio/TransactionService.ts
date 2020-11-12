import { TransactionImpl } from "./model/TransactionImpl";

export interface TransactionService {
    add(t : TransactionImpl) : boolean
    print() : void
}