import { Either } from '~/shared/either';
import { userType, userStoreType } from '~/domain/user/dtos';
import { InvalidParamError, InternalServerError } from '~/domain/errors';

export interface ISignUserUseCase {
  perform: (input: ISignUserUseCase.Input) => ISignUserUseCase.Output;
}

type signUserUseCaseFailed = InvalidParamError | InternalServerError;
export namespace ISignUserUseCase {
  export type Input = userType;
  export type Output = Promise<Either<signUserUseCaseFailed, userStoreType>>;
}
