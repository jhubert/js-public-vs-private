var PublicStore = require('./lib/public-item-store.js');
var PrivateStore = require('./lib/private-item-store.js');

function change(store) {
  var before = store.getAll();
  store.items = 'mutated';
  return before !== store.getAll();
}

function testStore(scope, store) {
  if (change(store)) {
    console.log('`items` variable IS changeable in the ' + scope + ' store.');
  } else {
    console.log('`items` variable is not changeable in the ' + scope + ' store.');
  }
}

testStore('Public', PublicStore);
testStore('Private', PrivateStore);
