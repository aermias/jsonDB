var JsonDB = require('node-json-db');
var db = new JsonDB("data", true, true);


let info = { first_name: 'Claude', last_name: 'McAlpin' };

db.push('/name', info);
db.push('/name', {
  middle_name: 'Patrick'
}, false);