const { logger: rootLogger } = require('./helpers');
const { runFrontend } = require('./server-frontend');

(async () => {
    const logger = rootLogger.child({
        gitHash: 'unspecified'
    });

    await runFrontend(logger);
})();