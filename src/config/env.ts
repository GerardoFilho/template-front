import {z} from 'zod';

const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
    VITE_HTTP_API: z.url(),
    VITE_API_TIMEOUT:z.string().transform(Number).default(10000),
});

export const env = envSchema.parse(import.meta.env);

export default env;