import { createServer } from "http";
import { once } from "events";
import { randomUUID } from "crypto";
import { PrismaClient } from "@prisma/client";
import { routes } from "./routes.js";

const prisma = new PrismaClient();

const Database = new Map();

function respondJSON(data, response) {
  return response.end(JSON.stringify(data));
}

async function handler(request, response) {
  const { url, method } = request;
  if (routes[url]) {
    const route = routes[url];
    if (route[method]) {
      const data = await route[method](request, response);
      respondJSON(data, response);
      return;
    }

    response.statusCode = 405;
    response.end(`Method ${method} not allowed`);
    return;
  }
  response.statusCode = 404;
  response.end(`Route ${url} not found`);
}
//   routes[url] && routes[url][method] && routes[url][method](request, response);
//   if (method === "GET") {
//     return respondJSON([...Database.values()], response);
//   }

//   if (method === "POST") {
//     const body = await once(request, "data");
//     const id = randomUUID();
//     const data = JSON.parse(body);
//     Database.set(id, data);
//     return respondJSON({ ok: 1 }, response);
//   }

//   if (method === "DELETE") {
//     Database.clear();
//     return respondJSON({ ok: 1 }, response);
//   }
// }

export default createServer(handler);
