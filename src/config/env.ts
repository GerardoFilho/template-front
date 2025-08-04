import {z} from 'zod';

const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
    VITE_API_URL: z.string().url(),
});

export const env = envSchema.parse(process.env);

export default env;