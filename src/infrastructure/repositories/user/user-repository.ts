import { IUserRepository } from '~/application/repositories/user';
import { userStoreType } from '~/domain/user/dtos';
const userMemoryStore: userStoreType[] = [];
export class UserRepository implements IUserRepository {
  async sign(data: userStoreType): Promise<{ id: string }> {
    userMemoryStore.push(data);
    return { id: userMemoryStore.at(-1)?.id };
  }

  async getId({ id }: { id: string }): Promise<userStoreType> {
    const userStore = userMemoryStore.find((user) => user.id === id);
    return userStore;
  }

  async getEmail({ email }: { email: string }): Promise<userStoreType> {
    const userStore = userMemoryStore.find((user) => user.email === email);
    return userStore;
  }

  async getAll(): Promise<userStoreType[]> {
    return userMemoryStore;
  }
}
