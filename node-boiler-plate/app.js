import express from 'express';
import { morganLogger } from './config/logger.js'
import helmet from 'helmet'

const app = express();

// set security HTTP headers
app.use(helmet());

// set logger for nodejs
app.use(morganLogger)

// parse json request body
app.use(express.json());

app.get('*', (req, res) => {
    res.status(200).json({ status: 'ok' })
})



export default app;
