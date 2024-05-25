const mongo = require("mongodb")
const MongoClient = mongo.MongoClient;

async function processDB(){
  const url = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(url);

  try{
    await client.connect();

   const db = client.db("schooldbtest");// Jeżeli nie ma bazy tworzy nową

   let collection = db.collection("students")// jeżeli nie ma kolekcji tworzy nową

   await collection.insertOne({name:"Asia", email: "asia@example.com"})
   await collection.insertOne({name:"Ola", email: "aola@example.com"})

   const students = [
    {name:"Kasia", email: "kasia@example.com"},
    {name:"Tomek", email: "Tomek@example.com"},
    {name:"Daniel", email: "Daniel@example.com"}
   ]

   const options = { ordered: true}
   // jesli jeden element sięnie zapisze to reszta też
   //nie będzie zapisana

   const result = await collection.insertMany(students, options)
   console.log(`${result.insertedCount} students were saved`)
  }catch(err){
    console.log(err)
  }
  finally{
    await client.close()
  }

}

processDB()