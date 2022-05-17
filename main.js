import { createServer } from "http";
import { once } from "events";
import { randomUUID } from "crypto";

const Database = new Map();

function respondJSON(data, response) {
  return response.end(JSON.stringify(data));
}

async function handler(request, response) {
  const { url, method } = request;
  if (method === "GET") {
    return respondJSON([...Database.values()], response);
  }

  if (method === "POST") {
    const body = await once(request, "data");
    const id = randomUUID();
    const data = JSON.parse(body);
    Database.set(id, data);
    return respondJSON({ ok: 1 }, response);
  }

  if (method === "DELETE") {
    Database.clear();
    return respondJSON({ ok: 1 }, response);
  }
}

export default createServer(handler);
