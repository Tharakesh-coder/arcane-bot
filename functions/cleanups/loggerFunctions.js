const winston = require('winston');
const chalk = require('chalk');
const moment = require('moment');
const dateNow = moment(new Date()).format("LTS");

function startLogger(bot){
    bot.logger = winston.createLogger({
        transports: [ 
            new winston.transports.Console(),
        ],
        format: winston.format.printf(log => chalk`{gray [${dateNow}]} {redBright ${log.level.toUpperCase()}:} ${log.message}`),
    });
};

module.exports = startLogger;