const express = require('express');
const app = express();
const morgan = require('morgan');
const { logger } = require('./logger/logger');


const morganFormat = ":method :url :status :response-time ms";

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok' })
})  

app.listen('3000', () => {
  logger.info('server started on port 3000');
})