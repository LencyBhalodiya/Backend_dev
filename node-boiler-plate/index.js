import { config } from './config/config.js'
import { logger } from './config/logger.js'
import app from './app.js'

let server;
server = app.listen(config.PORT, () => {
    logger.info(`Server started at PORT: ${config.PORT}`)
})

const exitHandler = (error) => {
    logger.error(`Caught exception: ${error}\n` + `Exception origin: ${error.stack}`);
    if (server) {
        server.close(() => {
            logger.info('Server closed');
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
};

//  close server on unhandle Errors
process.on('uncaughtException', exitHandler);
process.on('unhandledRejection', exitHandler);
process.on('SIGTERM', () => {
    logger.info('SIGTERM received');
    if (server) server.close();
});

