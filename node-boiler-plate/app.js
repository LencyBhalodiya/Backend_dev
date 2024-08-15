import express from 'express';
import { morganLogger } from './config/logger.js'
import helmet from 'helmet'
import mongoSanitize from 'express-mongo-sanitize'
import httpStatus from 'http-status';
import cors from 'cors'
import { ApiError } from './utils/ApiErrorHandler.js';
import { ApiResponse } from './utils/APIResponseHandler.js';

const app = express();

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// sanitize request data
app.use(mongoSanitize());

// enable cors
app.use(cors());
app.options('*', cors());

// set logger for nodejs
app.use(morganLogger)

app.get('/', (req, res) => {
    ApiResponse(res, 200, { statuss: 'okk' })
})
// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not Found'))
})


export default app;
