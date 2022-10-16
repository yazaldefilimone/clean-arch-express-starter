import { AlreadyExistsError, InternalServerError, InvalidParamError } from '~/domain/errors';
import { ISignUserUseCase } from '~/domain/user/use-cases';
import { IController } from '~/infrastructure/controllers/protocols';

export class SignUserController implements IController {
  private readonly signUserUseCase: ISignUserUseCase;
  constructor(signUserUseCase: ISignUserUseCase) {
    this.signUserUseCase = signUserUseCase;
  }

  async execute({ request, response }: IController.Input): Promise<IController.Output> {
    try {
      const payload = request.body;
      if (!payload) return response.status(204).json({ message: 'payload is empty' });
      const result = await this.signUserUseCase.perform(payload);

      if (result.isLeft()) {
        return response.status(400).json({ message: result.value.message });
      }
      return response.status(201).json(result.value);
    } catch (error) {
      const serverError = new InternalServerError();
      return response.status(500).json({ message: serverError.message });
    }
  }
}
