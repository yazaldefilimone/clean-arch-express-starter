import { Router } from 'express';
import { makeSignUserFactory } from '~/main/factories/user';

const userRoutes = Router();

userRoutes.post('/sign', makeSignUserFactory);

export { userRoutes };
