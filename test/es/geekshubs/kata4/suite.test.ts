const { getHello } = require("../../../../src/es/geekshubs/kata1/hello")

describe('Testing', function () {

    const HELLO = 'Hello '

    //Patrón triple AAA
    test('Caso base -> Hello ', function(){
        //Arrange
        var exp = HELLO
        //Act
        var res = getHello('')
        //Assert
        expect(res).toBe(exp)
    })

      //Patrón triple AAA
      test('Caso 1 -> Hello vicboma1', function(){
        var name = 'vicboma1'
        //Arrange
        var exp = HELLO+name
        //Act
        var res = getHello(name)
        //Assert
        expect(res).toBe(exp)
    })
})