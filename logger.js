const winston = require('winston');
const chalk = require('chalk');
const moment = require('moment');
const dateNow = moment(new Date()).format("LTS");
const bot = require('index.js');

/* Configs */
const logger = winston.createLogger({
	transports: [ 
		new winston.transports.Console(),
	],
	format: winston.format.printf(log => chalk`{gray [${dateNow}]} {redBright ${log.level.toUpperCase()}:} ${log.message}`),
});