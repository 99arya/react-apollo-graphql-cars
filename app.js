//Get the express library from node_modules which we have just downloaded.
const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose"); //using mongoose to connect with db

const schema = require("./schema/schema");
const cors = require("cors");

//Making const of express() into a variable (JS function first class Object).

const app = express();
app.use(cors());
/*We can use graphql on express server with middlewares, so that whenever
    we need graphql query from frontend, our express server can handle it
    smoothly.
    graphqlHTTP method let us do what we want to do if we have captured 
    '/graphql' middleware.
   */

  mongoose.connect(
    "mongodb://admin:abc123@ds125053.mlab.com:25053/vinodchauhan",
    { useNewUrlParser: true },
    () => {
      console.log("Connect with DB successfully.");
    }
  );

  
  
  app.use(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      graphiql: true
    })
  );
  //When our application starts, it will listen on port 4000
app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
