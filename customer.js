const _ = require("lodash");

var Customer = function(name, cash){
  this.name = name;
  this.cash = cash;
  this.recordCollection = [];
}

Customer.prototype.buy = function (recordStore, record) {
  //if recordStore has the record in the inventory
  if(_.includes(recordStore.listInventory(), record)){
    if(this.cash >= record.price){
      this.recordCollection.push(record);
      this.cash -= record.price;
    }
  }
};

Customer.prototype.sell = function (record) {
  _.remove(this.recordCollection, record);
  this.cash += record.price;
};

Customer.prototype.recordCollectionValue = function () {
  return _.sumBy(this.recordCollection, 'price');
};

Customer.prototype.recordCollectionGenreValue = function (genre) {
  let newArray = _.filter(this.recordCollection, {genre:genre});
  return _.sumBy(newArray, 'price');
};


module.exports = Customer;
