import { AuthenticateUserController } from "./controllers/AuthenticateUserController.js";

export const routes = {
  "/": {
    GET: (req, res) => {
      home(req, res);
    },
  },
  "/login": {
    POST: () => {
      home(req, res);
    },
  },
  "/profile": {
    GET: (req, res) => {
      home(req, res);
    },
  },
  "/logout": {
    GET: (req, res) => {
      home(req, res);
    },
  },
  "/register": {
    POST: () => {
      // register()
    },
  },
  "/forgot-password": {
    POST: () => {
      // forgotPassword()
    },
  },
  "/reset-password": {
    POST: () => {
      // resetPassword()
    },
  },
  "/resumos": {
    POST: () => {
      // createResumo()
    },
    GET: () => {
      // getResumoComments()
    },
  },
  "/resumos/:id": {
    GET: () => {
      // getResumo()
    },
    DELETE: () => {
      // deleteResumo()
    },
    UPDATE: () => {
      // updateResumo()
    },
  },
  "/resumos/:id/comments": {
    GET: () => {
      // getResumoComments()
    },
    POST: () => {
      // createResumoComment()
    },
    DELETE: () => {
      // deleteResumoComment()
    },
    UPDATE: () => {
      // updateResumoComment()
    },
  },
};

function home(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.end(`
    <h1>Hello World</h1>
    <p>This is a simple example of a Node.js web server.</p>
  `);
}
