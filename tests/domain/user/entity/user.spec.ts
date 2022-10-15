import { User } from '~/domain/user/entity';
import { userType } from '~/domain/user/dtos';
import { InvalidParamError } from '~/domain/errors';

const makeSut = () => {
  const memoryPayload: userType = {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    password: 'johndoe@2020',
  };

  const sut = User;
  return {
    sut,
    memoryPayload,
  };
};

describe('User', () => {
  it('Should return InvalidParam Name if User not receive correct name', () => {
    const { sut, memoryPayload } = makeSut();
    memoryPayload.name = 'j';
    const build = sut.build(memoryPayload);
    expect(build.isLeft()).toBe(true);
    expect(build.isRight()).toBe(false);
    expect(build.value).toEqual(new InvalidParamError({ param: 'name' }));
  });

  it('Should return InvalidParam email if User not receive correct email', () => {
    const { sut, memoryPayload } = makeSut();
    memoryPayload.email = 'john@gmail';
    const build = sut.build(memoryPayload);
    expect(build.isLeft()).toBe(true);
    expect(build.isRight()).toBe(false);
    expect(build.value).toEqual(new InvalidParamError({ param: 'email' }));
  });
  it('Should return InvalidParam password if User not receive correct password', () => {
    const { sut, memoryPayload } = makeSut();
    memoryPayload.password = '2';

    const build = sut.build({
      ...memoryPayload,
      password: '24',
    });
    expect(build.isLeft()).toBe(true);
    expect(build.isRight()).toBe(false);
    expect(build.value).toEqual(new InvalidParamError({ param: 'password' }));
  });
});
