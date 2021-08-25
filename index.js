const { Client, Collection } = require("discord.js");
const { token } = require("./configs/config.json");
const bot = new Client({ 
    partials: ['MESSAGE', 'CHANNEL', 'GUILD_MEMBER', 'REACTION'],
    intents: 32767,
});
const moment = require('moment');
const dateNow = moment(new Date()).format("LTS");

/* Configs */
bot.config = require('./configs/config.json');
bot.colors = require('./configs/colors.json');

bot.on('error', async (error) => {
    console.error(chalk`{gray [${dateNow}]} {redBright ERROR:}`, error);
});

/* Load commands/events */
["aliases", "commands"].forEach(x => bot[x] = new Collection());
["command", "event"].forEach(x => require(`./handlers/${x}`)(bot));

/* Login */
bot.login(token);