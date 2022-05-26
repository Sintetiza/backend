import { prisma } from "../prisma";

class UserService {
  async Login(email, senha) {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    if (user.senha !== senha) {
      throw new Error("Senha incorreta");
    }

    return user;
  }

  async Register(name, email, senha) {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (user) {
      throw new Error("Usuário já existe");
    }

    return prisma.user.create({
      data: {
        name,
        email,
        senha,
      },
    });
  }

  async Update(name, email, senha) {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    return prisma.user.update({
      where: {
        email,
      },
      data: {
        name,
        senha,
      },
    });
  }

  async Delete(email) {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    return prisma.user.delete({
      where: {
        email,
      },
    });
  }
}

export { UserService };
