const winston = require('winston');

const transports = [];
var logger;

if (process.env.NODE_ENV !== 'development') {
    transports.push(
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'log.log' })
    )
} else {
    transports.push(
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.cli(),
                winston.format.splat(),
            )
        })
        , new winston.transports.File({ filename: 'log.log' })

    )
}

if (!logger)
    logger = winston.createLogger({
       
        levels: winston.config.npm.levels,
        format: winston.format.combine(
            winston.format.timestamp({
                format: 'YYYY-MM-DD HH:mm:ss'
            }),
            winston.format.errors({ stack: true }),
            winston.format.splat(),
            winston.format.json()
        ),
        transports
    });


module.exports = logger;