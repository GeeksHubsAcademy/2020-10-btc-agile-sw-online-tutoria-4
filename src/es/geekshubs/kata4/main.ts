import { _ConsoleImpl } from "./servicio/console/_ConsoleImpl";
import { TransactionImpl } from "./servicio/model/TransactionImpl";
import { TransactionServiceImpl } from "./servicio/TransactionServiceImpl";
import { ClockImpl } from "./servicio/Utils/Clock/ClockImpl";


 var amount = 10
 var clock = new ClockImpl();
 var console = new _ConsoleImpl();
 var ts = new TransactionServiceImpl(console);
 var transaction = new TransactionImpl(clock.getDateNow(),amount)
 ts.add(new TransactionImpl(clock.getDateNow(),amount))
 ts.add(new TransactionImpl(clock.getDateNow(),amount*2))
 ts.add(new TransactionImpl(clock.getDateNow(),amount*3))
 ts.add(new TransactionImpl(clock.getDateNow(),amount*4))
 ts.add(new TransactionImpl(clock.getDateNow(),amount*5))

 ts.print()
