import { SignUserUseCase } from '~/application/use-cases/user';
import { AlreadyExistsError } from '~/domain/errors';
import { userType } from '~/domain/user/dtos';
import { InMemoryUserRepository } from '~/tests/infrastructure/repositories/user';

const makeSut = () => {
  const fakePayload: userType = {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    password: 'johndoe@2020',
  };

  const userRepository = new InMemoryUserRepository();
  const sut = new SignUserUseCase(userRepository);
  return {
    sut,
    userRepository,
    fakePayload,
  };
};

describe('SignUserUseCase', () => {
  it('Should return AlreadyExistsError if add two emails', async () => {
    const { sut, userRepository, fakePayload } = makeSut();
    await sut.perform(fakePayload);
    const response = await sut.perform(fakePayload);
    expect(userRepository.getEmailCalls).toBe(2);
    expect(userRepository.signCalls).toBe(1);
    expect(response.isLeft()).toBe(true);
    expect(response.isRight()).toBe(false);
    expect(response.value).toEqual(new AlreadyExistsError({ param: 'user' }));
  });

  it('Should be call  getEmailCalls, signCalls with 1 number when pass user data', async () => {
    const { sut, userRepository, fakePayload } = makeSut();
    const response = await sut.perform(fakePayload);
    expect(userRepository.getEmailCalls).toBe(1);
    expect(userRepository.signCalls).toBe(1);
    expect(response.isLeft()).toBe(false);
    expect(response.isRight()).toBe(true);
    expect(response.value).toHaveProperty('id');
  });
});
