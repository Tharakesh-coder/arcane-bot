const { Client, Collection } = require("discord.js");
const { token } = require("./configs/config.json");
const bot = new Client({ 
    partials: ['MESSAGE', 'CHANNEL', 'GUILD_MEMBER', 'REACTION'],
    intents: 32767,
});

/* Configs */
bot.config = require('./configs/config.json');
bot.colors = require('./configs/colors.json');


process.on('uncaughtException', (error) => bot.logger.log('error', error.stack));

/* Load commands/events */
require('logger.js');
["aliases", "commands"].forEach(x => bot[x] = new Collection());
["command", "event"].forEach(x => require(`./handlers/${x}`)(bot));

/* Login */
bot.login(token);