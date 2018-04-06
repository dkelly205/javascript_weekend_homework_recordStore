var assert = require('assert');
var RecordStore = require('../record_store.js');
var Record = require('../record.js');

describe('RecordStore', function(){

  var emptyRecordStore;
  var record1;
  var record2;
  var record3;
  var record4;
  var records;

  beforeEach(function(){
    emptyRecordStore = new RecordStore("Al's Music Lab", "Glasgow");
    record1 = new Record("Coldplay", "Yellow", "Rock", 6.99);
    record2 = new Record("Oasis", "Wonderwall", "Rock", 6.99);
    record3 = new Record("Coldplay", "The Scientist", "Rock", 6.99);
    records = [record1, record2, record3];
    recordStore = new RecordStore("Al's Music Lab", "Glasgow");
    recordStore.addRecords(records);
    record4 = new Record("Drake", "Gods Plan", "Rap", 6.99);
    record5 = new Record("Zedd", "The Middle", "Pop", 6.99);
  })

  it('should have a name', function(){
    assert.strictEqual(emptyRecordStore.name, "Al's Music Lab");
  })

  it('should have a city', function(){
    assert.strictEqual(emptyRecordStore.city, "Glasgow");
  })

  it('should start with an empty inventory', function(){
    assert.strictEqual(emptyRecordStore.inventory.length, 0);
  })

  it('should be able to add records', function(){
    assert.strictEqual(recordStore.inventory.length, 3);
  })

  it('should start with an empty balance', function(){
    assert.strictEqual(emptyRecordStore.balance, 0);
  })

  it('should be able to list all records in the inventory', function(){
    assert.deepStrictEqual(recordStore.listInventory(), records);
  })

  it('should be able to sell a Record and adjusts the Stores balance to account for the Record being sold.', function(){
    recordStore.sell(record1);
    assert.strictEqual(recordStore.balance, 6.99);
    assert.deepStrictEqual(recordStore.listInventory(), [record2, record3]);
  })


  it('should calculate the value of the inventory', function(){
    assert.strictEqual(recordStore.stockValue(), 20.97);
  })


  it('should report the finanicial situation of the store', function(){
    recordStore.sell(record1);
    assert.strictEqual(recordStore.finances(), "Balance: £6.99, Value of Inventory: £13.98");
  })

  it('should be able to view all records by genre', function(){
    recordStore.addRecords([record4]);
    recordStore.addRecords([record5]);
    assert.deepStrictEqual(recordStore.getRecordsByGenre("Rap"), [record4]);
  })






})
