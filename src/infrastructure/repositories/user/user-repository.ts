import { IUserRepository } from '~/application/repositories/user';
import { userStoreType } from '~/domain/user/dtos';

export class UserRepository implements IUserRepository {
  private readonly userMemoryStore: userStoreType[] = [];

  async sign(data: userStoreType): Promise<{ id: string }> {
    this.userMemoryStore.push(data);
    return { id: this.userMemoryStore.at(-1)?.id };
  }

  async getId({ id }: { id: string }): Promise<userStoreType> {
    const userStore = this.userMemoryStore.find((user) => user.id === id);
    return userStore;
  }

  async getEmail({ email }: { email: string }): Promise<userStoreType> {
    const userStore = this.userMemoryStore.find((user) => user.email === email);
    return userStore;
  }

  async getAll(): Promise<userStoreType[]> {
    return this.userMemoryStore;
  }
}
