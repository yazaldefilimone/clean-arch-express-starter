import { config } from 'dotenv';
config();

export const env = {
  port: process.env.PORT || 3003,
};
