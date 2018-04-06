var assert = require('assert');
var Customer = require('../customer.js');
var Record = require('../record.js');
var RecordStore = require('../record_store.js');

describe('Customer', function(){

  var customer;
  var customer2;
  var record;
  var recordStore;
  var record2;
  var record3;

  beforeEach(function(){
    customer = new Customer("Danny", 100);
    customer2 = new Customer("Kelly", 5);
    record = new Record("Coldplay", "Yellow", "Rock", 6.99);
    record2 = new Record("Coldplay", "The Scientist", "Rock", 6.99);
    record3 = new Record("Coldplay", "Sky Full of Stars", "Pop", 6.99);
    record4 = new Record("Oasis", "Wonderwall", "Rock", 6.99);
    record5 = new Record("Oasis", "Morning Glory", "Pop", 10.99);
    recordStore = new RecordStore("Al's Music Lab", "Glasgow");
    records = [record, record2, record4, record5];
    recordStore.addRecords(records);
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

  it('should be able to buy a record that is in the record store', function(){
    customer.buy(recordStore, record);
    assert.deepStrictEqual(customer.recordCollection, [record]);
    assert.strictEqual(customer.recordCollection.length, 1);
  })

  it('should not be able to buy a record that is not in the record store', function(){
    customer.buy(recordStore, record3);
    assert.deepStrictEqual(customer.recordCollection, []);
    assert.strictEqual(customer.recordCollection.length, 0);
  })

  it('should be able to sell a record', function(){
    customer.buy(recordStore, record);
    assert.strictEqual(customer.recordCollection.length, 1);
    customer.sell(record);
    assert.strictEqual(customer.recordCollection.length, 0);
  })

  it('cash should decrease by record price when buying a record', function(){
    assert.strictEqual(customer.cash, 100);
    customer.buy(recordStore, record);
    assert.strictEqual(customer.cash, 93.01);
  })

  it('cash should increase by record price when selling a record', function(){
    assert.strictEqual(customer.cash, 100);
    customer.buy(recordStore, record);
    assert.strictEqual(customer.cash, 93.01);
    customer.sell(record);
    assert.strictEqual(customer.cash, 100);
  })

  it('should not be able to buy a record if customer does not have enough cash', function(){
    customer2.buy(recordStore, record);
    assert.strictEqual(customer2.cash, 5);
    assert.strictEqual(customer2.recordCollection.length, 0);
  })

  it('should be able to view the total value of their collection', function(){
    customer.buy(recordStore, record);
    customer.buy(recordStore, record2);
    assert.strictEqual(customer.recordCollectionValue(), 13.98);
  })

  it('should be able to view the total value of all records of a given genre',function(){
    customer.buy(recordStore, record);
    customer.buy(recordStore, record2);
    customer.buy(recordStore, record4);
    customer.buy(recordStore, record5);
    assert.strictEqual(customer.recordCollectionGenreValue("Rock"), 20.97)
    assert.strictEqual(customer.recordCollectionGenreValue("Pop"), 10.99)
  })

  it('should be able to view most valuable record', function(){
    customer.buy(recordStore, record);
    customer.buy(recordStore, record2);
    customer.buy(recordStore, record4);
    customer.buy(recordStore, record5);
    assert.deepStrictEqual(customer.mostValuableRecord(), record5);
  })




})
