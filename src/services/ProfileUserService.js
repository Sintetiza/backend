import { prisma } from "../prisma";

class ProfileUserService {
  async execute(user_id) {
    const profile = await prisma.user.findFirst({
      where: {
        id: user_id,
      },
    });

    return profile;
  }
}

export { ProfileUserService };
