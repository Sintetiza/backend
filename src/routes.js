import { Router } from "express";

import { AuthenticateUserController } from "./controllers/AuthenticateUserController.js";

const router = Router();
router.get("/", (request, response) => {
  response.json({
    message: "Hello World",
  });
});
router.post("/authenticate", new AuthenticateUserController().handle);
// router.get("/profile", ensureAuthenticated, new ProfileUserController().handle);
// router.get("/logout", new LogoutUserController().handle);
// router.post("/register", new RegisterUserController().handle);
// router.post("/forgot-password", new ForgotPasswordUserController().handle);
// router.post("/reset-password", new ResetPasswordUserController().handle);
// router.post("/resumos", new CreateResumoController().handle);
// router.get("/resumos", new GetResumosController().handle);
// router.get("/resumos/:id", new GetResumoController().handle);
// router.delete("/resumos/:id", new DeleteResumoController().handle);
// router.put("/resumos/:id", new UpdateResumoController().handle);
// router.get("/resumos/:id/comments", new GetResumoCommentsController().handle);
// router.post(
//   "/resumos/:id/comments",
//   new CreateResumoCommentController().handle
// );
// router.delete(
//   "/resumos/:id/comments/:id",
//   new DeleteResumoCommentController().handle
// );
// router.put(
//   "/resumos/:id/comments/:id",
//   new UpdateResumoCommentController().handle
// );

export { router };
