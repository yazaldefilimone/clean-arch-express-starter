export class InvalidParamError extends Error {
  constructor({ param }: { param: string }) {
    super(`this [${param}] is not valid`);
    this.name = 'InvalidParamError';
  }
}
