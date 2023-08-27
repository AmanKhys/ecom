const mongoClient = require("mongodb").MongoClient;
const state = {
  db: null,
};
async function returnState(client, dbname, done) {
  console.log("reched hereree");
  state.db = await client.db(dbname);
  console.log("almost done");
  const dbList = await client.db().admin().listDatabases();
  dbList.databases.forEach((db) => {
    console.log("-- " + db.name);
  });
  done();
}
module.exports.connect = async function (done) {
  const url = "mongodb://localhost:27017";
  const dbname = "shopping";
  const client = new mongoClient(url);

  try {
    await client.connect();
    await returnState(client, dbname, done);
  } catch (e) {
    done(e);
    console.error(e);
  } finally {
    await client.close();
  }

  // await mongoClient.connect(url, (err, data) => {
  //   console.log("hey guiiiis");
  //   if (err) return done(err);
  //   state.db = data.db(dbname);
  //   done();
  // });
};
