const _ = require("lodash");

var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0.00;
}

RecordStore.prototype.addRecords = function (records) {
  for(let record of records){
    this.inventory.push(record);
  }
};

RecordStore.prototype.listInventory = function () {
  return this.inventory;
};

RecordStore.prototype.sell = function (record) {
  this.balance += record.price;
  _.remove(this.inventory, record);
};

RecordStore.prototype.stockValue = function () {
  return _.sumBy(this.inventory, 'price');
};


RecordStore.prototype.finances = function () {
  return `Balance: £${this.balance}, Value of Inventory: £${this.stockValue()}`;
};

RecordStore.prototype.getRecordsByGenre = function (genre) {
  return _.filter(this.inventory, {genre:genre});
};

module.exports = RecordStore;
