// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect');
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos').find().toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    consile.log('Unable to fetch Todos');
  });


  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count ${count}`);
  // }, (err) => {
  //   consile.log('Unable to fetch Todos');
  // });


  db.close();
});
