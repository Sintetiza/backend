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
  "/getresumos": {
    GET: () => {
      // getResumos()
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
