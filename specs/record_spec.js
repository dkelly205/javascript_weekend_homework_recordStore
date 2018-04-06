var assert = require('assert');
var Record = require('../record.js');

describe('Record', function(){

  var record;

  beforeEach(function(){
    record = new Record("Coldplay", "Yellow", "Rock", 6.99);
  })

  it('should have an artist', function(){
    assert.strictEqual(record.artist, "Coldplay");
  })

  it('should have a title', function(){
    assert.strictEqual(record.title, "Yellow");
  })

  it('should have a genre', function(){
    assert.strictEqual(record.genre, "Rock");
  })

  it('should have a price', function(){
    assert.strictEqual(record.price, 6.99);
  })

  it('should return properties as a string', function(){
    assert.strictEqual(record.properties(), "Artist: Coldplay, Title: Yellow, Genre: Rock, Price: £6.99");
  })

})
