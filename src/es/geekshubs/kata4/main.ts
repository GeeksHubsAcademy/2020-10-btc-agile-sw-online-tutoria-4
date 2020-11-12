import clockModule = require("../kata4/ClockImpl");
import Collections = require('typescript-collections');

var clock = new clockModule.ClockImpl()
var clockNow = clock.getDateNow()
console.log("la hora"+clockNow)
