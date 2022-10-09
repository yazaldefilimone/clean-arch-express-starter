export class InternalServerError extends Error {
  constructor () {
    super('Internal Server Error')
    this.name = 'InternalServerError'
  }
}
