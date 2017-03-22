var myBrendan = require('../myBrendan');
var assert = require('assert');

describe('myBrendan', function(){
  it('should have a name', function(){
    assert.equal("Brendan Eich", myBrendan.name);
  });

  it('should have a weapon of computer', function(){
    assert.equal("Computer", myBrendan.weapon);
  });

  it('should have a favurite drink of whisky', function(){
    assert.equal("Whisky", myBrendan.favDrink);
  });

  it('should start with a creativity level of 0', function(){
    assert.equal(0, myBrendan.creativityLevel);
  });

  it('drinking whisky should increase creativity level', function(){
    myBrendan.creativityLevel = 0;
    myBrendan.drink("Whisky");
    assert.equal(100, myBrendan.creativityLevel);
  });
})










