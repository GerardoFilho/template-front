import { z } from 'zod';

const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
    VITE_HTTP_API: z.url(),
    VITE_HTTP_API_FAKE: z.string(),
    VITE_API_TIMEOUT: z.string().transform(Number).default(10000),
    __APP_VERSION__: z.string(),
});

export const env = envSchema.parse({...import.meta.env,  __APP_VERSION__: __APP_VERSION__});

export default env;