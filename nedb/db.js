const Datastore = require('nedb');
const db = new Datastore({ filename: './data', autoload: true });

var doc = {
  hello: 'world',
  n: 5,
  today: new Date(),
  nedbIsAwesome: true,
  notthere: null,
  notToBeSaved: undefined,  // Will not be saved,
  fruits: [ 'apple', 'orange', 'pear' ],
  infos: { name: 'nedb' }
};

db.insert(doc, function (err, newDoc) {
  console.log('inserted my shit');
});

db.remove({}, { multi: true }, function (err, numRemoved) {
  console.log('removed my shit');
});