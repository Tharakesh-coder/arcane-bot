const { Client, Collection } = require("discord.js");
const { token } = require("./configs/config.json");
const bot = new Client({ 
    partials: ['MESSAGE', 'CHANNEL', 'GUILD_MEMBER', 'REACTION'],
    intents: 32767,
});
const winston = require('winston');
const chalk = require('chalk');
const moment = require('moment');
const dateNow = moment(new Date()).format("LTS");

/* Configs */
bot.config = require('./configs/config.json');
bot.colors = require('./configs/colors.json');

const logger = winston.createLogger({
	transports: [ 
		new winston.transports.Console(),
	],
	format: winston.format.printf(log => chalk`{gray [${dateNow}]} {redBright ${log.level.toUpperCase()}:} ${log.message}`),
});
bot.on('error', m => logger.log('error', m));
process.on('uncaughtException', (error, reason) => logger.log('error', `${error} because: ${reason}`));

/* Load commands/events */
["aliases", "commands"].forEach(x => bot[x] = new Collection());
["command", "event"].forEach(x => require(`./handlers/${x}`)(bot));

/* Login */
bot.login(token);