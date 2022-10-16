import { Request, Response } from 'express';
import { SignUserUseCase } from '~/application/use-cases/user';
import { SignUserController } from '~/infrastructure/controllers/user';
import { UserRepository } from '~/infrastructure/repositories/user';

export const makeSignUserFactory = async function (request: Request, response: Response) {
  const userRepository = new UserRepository();
  const signUserUseCase = new SignUserUseCase(userRepository);
  const signUserController = new SignUserController(signUserUseCase);
  return signUserController.execute({ request, response });
};
