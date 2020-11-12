import { TransactionImpl } from "../../../../src/es/geekshubs/kata4/servicio/model/TransactionImpl";

describe('Testing Model TransactionImpl', function () {

    //Patrón triple AAA
    test('Caso base -> amount 0 ', function(){
        //Arrange
        var exp = 0
        //Act
        var model = new TransactionImpl(0);
        //Assert
        expect(model.amount).toBe(exp)
    })

    //Patrón triple AAA
    test('Caso -> amount 10 ', function(){
        //Arrange
        var exp = 10
        //Act
        var model = new TransactionImpl(10);
        //Assert
        expect(model.amount).toBe(exp)
    })


    //Patrón triple AAA
    test('Corner case -> modelo -1', function(){
        //Arrange
        var exp = -1
        //Act
        var model = new TransactionImpl(-1);
        //Assert
        expect(model.amount).toBe(exp)
    })

})