const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect');
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos').insertOne({
    text: 'Something to do.',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo.', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.collection('Users').insertOne({
    name: 'Praveen',
    age: 20,
    location: 'Samastipur'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo.', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  
  db.close();
});
