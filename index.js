const { Client, Collection } = require("discord.js");
const { token } = require("./configs/config.json");
const bot = new Client({ 
    partials: ['MESSAGE', 'CHANNEL', 'GUILD_MEMBER', 'REACTION'],
    intents: 32767,
});

/* Configs */
bot.config = require('./configs/config.json');
bot.colors = require('./configs/colors.json');

const winston = require('winston');
const chalk = require('chalk');
const moment = require('moment');
const dateNow = moment(new Date()).format("LTS");

/* Configs */
bot.logger = winston.createLogger({
	transports: [ 
		new winston.transports.Console(),
	],
	format: winston.format.printf(log => chalk`{gray [${dateNow}]} {redBright ${log.level.toUpperCase()}:} ${log.message}`),
});
// process.on('uncaughtException', (error) => bot.logger.log('error', error.stack));

/* Load commands/events */
["aliases", "commands"].forEach(x => bot[x] = new Collection());
["command", "event", "process"].forEach(x => require(`./handlers/${x}`)(bot));

/* Login */
bot.login(token);