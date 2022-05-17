import Server from "./server.js";

const server = Server.listen(3000)
  .on("listening", () => console.log(`Server is listening on port ${server.address().port}`))