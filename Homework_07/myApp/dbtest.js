const MongoClient = require('mongodb').MongoClient;
const crypto = require('crypto');
const client = new MongoClient('mongodb://localhost:27017');


client.connect(function(err){
  const db = client.db('hw7');
  const collection = db.collection('homework7');
  var encrypted;
  collection.findOne({},function(err,doc){
   encrypted = (doc.message);
   const algorithm = 'aes256';
    const password = 'asaadsaad';
   const decipher = crypto.createDecipher(algorithm, password);
    const decrypted = decipher.update(encrypted, 'hex', 'utf8') + decipher.final('utf8');
    console.log(decrypted);
   });
   
  
  
    client.close();
})
