const fs = require('fs');

const set_name = ((table, old_name, new_name) => {
  for (let id in table) {
    if (table[id].name == old_name) table[id].name = new_name;
  }
});

fs.readFile('data.json', function(err, data) {
  let json = JSON.parse(data);

  // sets name to something new
  set_name(json.players, 'ChemicalX', 'ChemicalZ');

  json = JSON.stringify(json);

  fs.writeFile('data.json', json, function (err) {
    if (err) return console.log(err);

    console.log('Successfully wrote data.')
  });
});