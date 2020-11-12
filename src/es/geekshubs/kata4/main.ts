import clockModule = require("../kata4/ClockImpl");
import Collections = require('typescript-collections');
import TransactionImpl = require("../kata4/servicio/model/TransactionImpl")

var clock = new clockModule.ClockImpl()
var clockNow = clock.getDateNow()
console.log("la hora"+clockNow)

var model = new TransactionImpl.TransactionImpl(10);