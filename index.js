import express from "express";
import resolvers from "./resolvers.js";
import schema from "./schema.js";

import { graphqlHTTP } from "express-graphql";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
});

const root = resolvers;
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(8000, () => {
  console.log("[#]Running at 8000");
});
