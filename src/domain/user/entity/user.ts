import { randomUUID } from 'crypto';
import { InvalidParamError } from '~/domain/errors';
import { Either, left, right } from '~/shared/either';
import { isValidEmail, isValidPassword, isValidName } from '~/shared/validators';
import { userStoreType, userType } from '../dtos';
import { userBuildResponse } from './ports';

export class User {
  public user: userStoreType;
  private constructor(user: userType) {
    this.user = {
      id: randomUUID(),
      ...user,
      createdAt: new Date().toISOString(),
      updateAt: new Date().toISOString(),
    };
  }

  public static isValidEmail(email: string): Either<InvalidParamError, string> {
    return isValidEmail(email) ? right(email) : left(new InvalidParamError({ param: 'email' }));
  }

  public static isValidName(name: string): Either<InvalidParamError, string> {
    return isValidName(name) ? right(name) : left(new InvalidParamError({ param: 'name' }));
  }

  public static isValidPassword(password: string): Either<InvalidParamError, string> {
    return isValidPassword(password) ? right(password) : left(new InvalidParamError({ param: 'password' }));
  }

  public static build(user: userType): userBuildResponse {
    const userValidate = {
      email: this.isValidEmail(user.email),
      name: this.isValidName(user.name),
      password: this.isValidName(user.password),
    };

    if (userValidate.email.isLeft()) {
      return left(userValidate.email.value);
    }
    if (userValidate.name.isLeft()) {
      return left(userValidate.name.value);
    }
    if (userValidate.password.isLeft()) {
      return left(userValidate.password.value);
    }
    const userValid = {
      email: userValidate.email.value,
      name: userValidate.name.value,
      password: userValidate.password.value,
    };

    const metadata = new User(userValid);

    return right(metadata.user);
  }
}
