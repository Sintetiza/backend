import { serverHttp } from "./server.js";
const port = process.env.PORT || 3000;

export const server = serverHttp.listen(port).on("listening", printINFO);

function printINFO() {
  if (port === 3000) {
    console.log("Listening on http://localhost:3000");
    return;
  }
  console.log(`Server is listening on port ${server.address().port}`);
}
