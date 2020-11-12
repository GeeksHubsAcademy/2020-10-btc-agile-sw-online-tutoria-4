import { TransactionImpl } from "../../../../src/es/geekshubs/kata4/servicio/model/TransactionImpl";
import { ClockImpl } from "../../../../src/es/geekshubs/kata4/servicio/Utils/Clock/ClockImpl";

describe('Testing Model TransactionImpl', function () {

    //Patrón triple AAA
    test('Caso base -> amount 0 ', function(){
        var clock = new ClockImpl();
        //Arrange
        var exp = 0
        //Act
        var model = new TransactionImpl(clock.getDateNow(),0);
        //Assert
        expect(model.amount).toBe(exp)
    })

    //Patrón triple AAA
    test('Caso -> amount 10 ', function(){
        var clock = new ClockImpl();
        //Arrange
        var exp = 10
        //Act
        var model = new TransactionImpl(clock.getDateNow(),10);
        //Assert
        expect(model.amount).toBe(exp)
    })


    //Patrón triple AAA
    test('Corner case -> modelo -1', function(){
        var clock = new ClockImpl();
        //Arrange
        var exp = -1
        //Act
        var model = new TransactionImpl(clock.getDateNow(),-1);
        //Assert
        expect(model.amount).toBe(exp)
    })

})


describe('Testing Clock', function () {
    //Patrón triple AAA
    test('getDateNow', function(){
        //Arrange
        var exp = "2020-11-12"
        //Act
        var clock = new ClockImpl();
        //Assert
        expect(clock.getDateNow()).toBe(exp)
    })
})


describe('Testing Trasaction Service', function () {
    //Patrón triple AAA
    test('Add Transaction', function(){
        //Arrange
        var exp = "2020-11-12"
        //Act
        var clock = new ClockImpl();
        //Assert
        expect(clock.getDateNow()).toBe(exp)
    })
})