import { IUserRepository } from '~/application/repositories/user';
import { ISignUserUseCase } from '~/domain/user/use-cases';

export class SignUserUseCase implements ISignUserUseCase {
  private readonly userRepository: IUserRepository;
  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async perform(input: ISignUserUseCase.Input): ISignUserUseCase.Output {
    return null;
  }
}
