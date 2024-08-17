import dotenv from 'dotenv'
import { join } from 'path'
import { fileURLToPath } from 'url';
import Joi from 'joi';

const __dirname = fileURLToPath(import.meta.url);
const envPath = join(__dirname, `../.env.${process.env.NODE_ENV}`);
dotenv.config({ path: envPath });

const envVarsSchema = Joi.object({
    NODE_ENV: Joi.string().valid('dev', 'prod').required(),
    HOST: Joi.string().description('should be localhost'),
    PORT: Joi.number().default(3000),
    ACCESS_TOKEN_SECRET: Joi.string().trim().required().description('JWT secret key'),
    ACCESS_TOKEN_EXPIRY: Joi.string().trim().required().description('JWT time exp'),
}).unknown(); // allow unknown env variable

const { value: envVars, error } = envVarsSchema.validate(process.env);

if (error) throw new Error(`Config validation error: ${error.message}`);


export const config = {
    NODE_ENV: envVars.NODE_ENV,
    HOST: envVars.HOST,
    PORT: envVars.PORT,
    jwt: {
        secret: envVars.ACCESS_TOKEN_SECRET,
        refreshExpirationDays: envVars.ACCESS_TOKEN_EXPIRY,
    },
}