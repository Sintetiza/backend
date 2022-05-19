import { ProfileUserService } from "../services/ProfileUserService";

class ProfileUserController {
  async handle(req, res) {
    const { user_id } = req;

    const service = new ProfileUserService();

    const result = await service.execute(user_id);

    return res.json(result);
  }
}

export { ProfileUserController };
