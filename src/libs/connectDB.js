import { MongoClient, ServerApiVersion } from "mongodb";

let db;

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.9ecoeol.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
export const connectDB = async ()=>{
    if(db) return db;
    try{
        const client = new MongoClient(uri, {
            serverApi: {
              version: ServerApiVersion.v1,
              strict: true,
              deprecationErrors: true,
            }
          });
          db= client.db('animalDB');
          return db
    }
    catch(error){
        console.log(error)
    }
}