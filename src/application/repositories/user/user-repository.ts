export interface IUserRepository {
  sign: () => void;
  login: () => void;
  getId: () => void;
  getAll: () => void;
}
