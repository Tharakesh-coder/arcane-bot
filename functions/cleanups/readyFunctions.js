const wait = require('util').promisify(setTimeout);
const chalk = require('chalk');
const moment = require('moment');
const dateNow = moment(new Date()).format("LTS");
log = console.log;

async function nowReady(bot){
       // Wait till start
       await wait(1000);

       // Ready log
       log(chalk`\n{gray [${dateNow}]} {green Starting up}{rgb(255,255,255) ...}`);
       log(chalk`{gray [${dateNow}]} {green Started}{rgb(255,255,255) !}`);
       log(chalk`{rgb(255, 216, 0) ·········································}`)

       // Set status and activity
       log(chalk`{gray [${dateNow}]} {cyan Setting statuses}{rgb(255,255,255) ...}`);
       await wait(1000);
       bot.user.setStatus('dnd');
       bot.user.setActivity("over Arcane.lv · ARCANE", {type: "WATCHING"});
       await wait(500);
       log(chalk`{gray [${dateNow}]} {cyan Statuses have been set}{rgb(255,255,255) !}\n`);
};


module.exports = {
       nowReady,
       restartedBot
};