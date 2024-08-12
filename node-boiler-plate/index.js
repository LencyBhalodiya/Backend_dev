import express from 'express';
import { config } from './config/config.js'

const app = express();
console.log(config)

app.listen(config.PORT, () => {
    console.log(`server started at PORT: ${config.PORT} `)
})

