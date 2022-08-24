import type { EndPoints } from '../types/cms-types';
import { MicroCMS } from 'microcms-lib';
import { config } from 'dotenv';

config(); // .env
export const client = new MicroCMS<EndPoints>({
  service: process.env.SERVICE,
  apiKey: process.env.API_KEY,
});
