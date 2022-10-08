import { InvalidParamError } from '~/domain/errors';
import { Either } from '~/shared/either';
import { userStoreType } from '~/domain/user/dtos';

export type userBuildFailed = InvalidParamError;
export type userBuildSuccess = userStoreType;
export type userBuildResponse = Either<userBuildFailed, userBuildSuccess>;
