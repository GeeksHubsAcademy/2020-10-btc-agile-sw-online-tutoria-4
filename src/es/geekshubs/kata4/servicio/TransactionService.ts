import { TransactionImpl } from "./model/TransactionImpl";

export interface TransactionService {
    add(t : TransactionImpl) : TransactionImpl
    print() : void
}