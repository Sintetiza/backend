import { verify } from "jsonwebtoken";

export function ensureAuthenticated(req, res, next) {
  const authToken = req.headers.authorization;
  if (!authToken) {
    res.status(401).json({ message: "token invalid." });
  }
  // como o token vem no formato Bearer, precisamos separar
  const [, token] = authToken.split(" ");
  try {
    const { sub } = verify(token, process.env.JWT_SECRET);
    req.user_id = sub;
    return next();
  } catch (err) {
    res.status(401).json({ message: "token expired." });
  }

  res.redirect("/login");
}
