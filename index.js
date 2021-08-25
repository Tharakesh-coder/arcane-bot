const { Client, Collection } = require("discord.js");
const startLogger = require('./functions/cleanups/loggerFunctions.js');
const bot = new Client({ 
    partials: ['MESSAGE', 'CHANNEL', 'GUILD_MEMBER', 'REACTION'],
    intents: 32767,
});

/* Configs */
bot.config = require('./configs/config.json');
bot.colors = require('./configs/colors.json');
startLogger(bot);

/* Load commands/events */
["aliases", "commands"].forEach(x => bot[x] = new Collection());
["command", "event", "process"].forEach(x => require(`./handlers/${x}`)(bot));

/* Login */
bot.login(bot.config.token);