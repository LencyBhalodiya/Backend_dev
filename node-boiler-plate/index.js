import express from 'express';
import { morganLogger } from './config/logger.js'

const app = express();

app.use(morganLogger)

app.get('*', (req, res) => {
    res.status(200).json({ status: 'ok' })
})



export default app;
