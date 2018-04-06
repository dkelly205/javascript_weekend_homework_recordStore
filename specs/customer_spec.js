var assert = require('assert');
var Customer = require('../customer.js');

describe('Customer', function(){

  var customer;

  beforeEach(function(){
    customer = new Customer("Danny", 100);
  })

  it('should have a name', function(){
    assert.strictEqual(customer.name, "Danny");
  })

  it('should have cash', function(){
    assert.strictEqual(customer.cash, 100);
  })

  it('should start with an empty record collection', function(){
    assert.strictEqual(customer.recordCollection.length, 0);
  })

})
