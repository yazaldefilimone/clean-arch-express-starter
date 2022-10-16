import { userLoginType, userStoreType } from '~/domain/user/dtos';

export interface IUserRepository {
  sign: (data: userStoreType) => Promise<{ id: string }>;
  getId: ({ id }: { id: string }) => Promise<userStoreType | null>;
  getEmail: ({ email }: { email: string }) => Promise<userStoreType | null>;
  getAll: () => Promise<userStoreType[]>;
}
