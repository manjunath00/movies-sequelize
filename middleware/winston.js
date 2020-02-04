const winston = require('winston');

const logger = new winston.createLogger({
    exitOnError : false,
    level : 'debug',
    format : winston.format.combine(
        winston.format.timestamp(),
        winston.format.simple(),
        winston.format.colorize(),
        winston.format.json()
    ),

    transports : [
        new (winston.transports.Console)({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.json()
            )
        }),
        new (winston.transports.File)({ filename : 'logger.log'})
    ]
})

const logsError = function(errorMessage) {
    logger.error(errorMessage)
}


module.exports = logsError;
