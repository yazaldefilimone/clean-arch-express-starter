import { IUserRepository } from '~/application/repositories/user';
import { userStoreType } from '~/domain/user/dtos';

export class InMemoryUserRepository implements IUserRepository {
  private readonly userMemoryStore: userStoreType[] = [];
  public signCalls = 0;
  public getIdCalls = 0;
  public getEmailCalls = 0;
  public getAllCalls = 0;

  async sign(data: userStoreType): Promise<{ id: string }> {
    this.signCalls++;
    this.userMemoryStore.push(data);
    return { id: this.userMemoryStore.at(-1)?.id };
  }

  async getId({ id }: { id: string }): Promise<userStoreType> {
    this.getIdCalls++;
    const userStore = this.userMemoryStore.find((user) => user.id === id);
    return userStore;
  }

  async getEmail({ email }: { email: string }): Promise<userStoreType> {
    this.getEmailCalls++;
    const userStore = this.userMemoryStore.find((user) => user.email === email);
    return userStore;
  }

  async getAll(): Promise<userStoreType[]> {
    this.getAllCalls++;
    return this.userMemoryStore;
  }
}
