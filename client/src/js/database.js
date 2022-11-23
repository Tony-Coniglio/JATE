import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (id, value) => {

const tEDb = await openDB('jate', 1);
const transact = tEDb.transaction('jate', readwrite);
const objectStorage = transact.objectStorage('jate');
const request = objectStorage.put({id: id, value: value});
const response = await request;
console.log('saved to the db', response)
}
;



// TODO: Add logic for a method that gets all the content from the database
export const getDb = async (value) => {
  
  const tEDb = await openDB('jate', 1);
  const transact = tEDb.transaction('jate', readwrite);
  const objectStorage = transact.objectStorage('jate');
  const request = objectStorage.getAll();
  const response = await request;
  console.log('saved to the db', response);
};

initdb();
