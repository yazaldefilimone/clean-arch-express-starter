import { IUserRepository } from '~/application/repositories/user';
import { AlreadyExistsError } from '~/domain/errors';
import { User } from '~/domain/user/entity';
import { ISignUserUseCase } from '~/domain/user/use-cases';
import { left, right } from '~/shared/either';

export class SignUserUseCase implements ISignUserUseCase {
  private readonly userRepository: IUserRepository;
  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async perform(input: ISignUserUseCase.Input): ISignUserUseCase.Output {
    const building = User.build(input);

    if (building.isLeft()) return left(building.value);
    const user = building.value;

    const userExists = this.userRepository.getEmail({ email: user.email });
    if (userExists) {
      return left(new AlreadyExistsError({ param: 'user' }));
    }
    const userStore = await this.userRepository.sign(user);

    return right(userStore);
  }
}
