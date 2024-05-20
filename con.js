const { MongoClient } = require('mongodb');
async function main() {
    // we'll add code here soon
    // mongodb+srv://nithin:<password>@cluster0.46woafz.mongodb.net/library?retryWrites=true&w=majority&appName=Cluster0
    // const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/sample_airbnb?retryWrites=true&w=majority";
    const uri = "mongodb+srv://nithin:nithin123@cluster0.46woafz.mongodb.net/Cluster0?retryWrites=true&w=majority";


    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await  listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
 }
 main().catch(console.error);

 async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};