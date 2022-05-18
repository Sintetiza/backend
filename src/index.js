import Server from "./server.js";
const port = process.env.PORT || 3000;

const server = Server.listen(port).on("listening", () =>
  console.log(`Server is listening on port ${server.address().port}`)
);
