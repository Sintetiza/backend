import { UserService } from "../services/UserService.js";
class UserController {
  async handle(request, response) {}

  async Login(request, response) {
    const userService = new UserService();
    const { email, senha } = request.body;
    try {
      const user = await userService.Login(email, senha);
      response.json({
        message: "success",
        success: true,
        result: user,
      });
    } catch (error) {
      return response.json({
        message: "error",
        success: false,
        result: error.message,
      });
    }
  }
}

export { UserController };
