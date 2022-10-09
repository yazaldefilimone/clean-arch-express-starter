import { User } from '~/domain/user/entity'
import { userType } from '~/domain/user/dtos'
import { InvalidParamError } from '~/domain/errors'

const makeSut = () => {
  const memoryPayload: userType = {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    password: 'johndoe@2020'
  }

  const sut = User
  return {
    sut,
    memoryPayload
  }
}

describe('User', () => {
  it('Should return InvalidParam Name if User not receive correct name', () => {
    const { sut, memoryPayload } = makeSut()
    memoryPayload.name = 'john'
    const build = sut.build(memoryPayload)
    expect(build.isLeft()).toBe(true)
    expect(build.isRight()).toBe(false)
    expect(build.value).toEqual(new InvalidParamError({ param: 'name' }))
  })
})
