const express = require('express');
const app = express();
const morgan = require('morgan');
const { logger } = require('./logger/logger');
const config = require('./config/config');

const morganFormat = ":method :url :status :response-time ms";

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const log = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(log));
      },
    },
  })
);

app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok' })
})  

app.listen(config.PORT, () => {
  logger.info(`server started on port ${config.PORT}`,);
})