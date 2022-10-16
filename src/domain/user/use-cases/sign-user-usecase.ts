import { Either } from '~/shared/either';
import { userType, userStoreType } from '~/domain/user/dtos';
import { InvalidParamError, InternalServerError } from '~/domain/errors';
import { AlreadyExistsError } from '~/domain/errors/already-exists-error';

export interface ISignUserUseCase {
  perform: (input: ISignUserUseCase.Input) => ISignUserUseCase.Output;
}

type signUserUseCaseFailed = InvalidParamError | InternalServerError | AlreadyExistsError;
export namespace ISignUserUseCase {
  export type Input = userType;
  export type Output = Promise<Either<signUserUseCaseFailed, { id: string }>>;
}
