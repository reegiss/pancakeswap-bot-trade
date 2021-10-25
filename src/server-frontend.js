const express = require('express');
const path = require('path');
const config = require('config');

const runFrontend = async serverLogger => {
    const logger = serverLogger.child({ server: 'frontend' });
    logger.info({ config }, `API ${config.get('mode')} frontend started on`);
    const app = express();
    app.use(express.static(path.join(__dirname, '/../public')));
    const server = app.listen(80);
};

module.exports = { runFrontend };