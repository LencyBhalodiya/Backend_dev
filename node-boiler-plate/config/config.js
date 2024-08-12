import dotenv from 'dotenv'
import { join } from 'path'

const envPath = join(`../.env.${process.env.NODE_ENV}`)
dotenv.config({ path: envPath });
console.log(process.env.PORT);


export const config = {
    NODE_ENV: process.env.NODE_ENV || 'dev',
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || 3000
}