export class AlreadyExistsError extends Error {
  constructor({ param }: { param: string }) {
    super(`this [${param}] already exists.`);
    this.name = 'AlreadyExistsError';
  }
}
