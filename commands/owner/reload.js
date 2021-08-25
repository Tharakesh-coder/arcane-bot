const { MessageEmbed } = require('discord.js');
const { readdirSync } = require('fs');
const chalk = require('chalk');
const moment = require('moment');
const dateNow = moment(new Date()).format("LTS");

module.exports.run = async (bot, message, args) => {
    message.delete();
    
    // console.error(chalk`{gray [${dateNow}]} {redBright ERROR:}`, "tirlins 123")
    new Error("tirlins123")

    // if(message.author.id != "286540906335830017") return message.channel.send({ content: `<@${message.author.id}>, no.` }).then(m => { setTimeout(() => m.delete(), 150)});
    // let commandName = args[0];
    // if(!commandName) return message.channel.send({ content: `<@${message.author.id}>, norādi komandu.` }).then(m => { setTimeout(() => m.delete(), 1500)});
    // const commandFolders = readdirSync('./commands');
    // commandName = commandName.toLowerCase();
    // const folderName = commandFolders.find(folder => readdirSync(`./commands/${folder}`).includes(`${commandName}.js`));

    // try {
    //     delete require.cache[require.resolve(`../${folderName}/${commandName}.js`)];
    //     bot.commands.delete(commandName);
    //     const pull = require(`../${folderName}/${commandName}.js`);
    //     bot.commands.set(commandName, pull);

    //     let reloadingEmbed = new MessageEmbed()
    //     .setColor(bot.colors.d_blue)
    //     .setDescription(`\`${commandName}\` komanda tiek pārlādēta!`)
    //     .setFooter(message.author.username, message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
    //     .setTimestamp(new Date());

    //     let reloadedEmbed = new MessageEmbed()
    //     .setColor(bot.colors.d_blue)
    //     .setDescription(`\`${commandName}\` komanda pārlādēta!`)
    //     .setFooter(message.author.username, message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
    //     .setTimestamp(new Date());
        
	//     message.channel.send({ embeds: [reloadingEmbed] }).then(m => { m.edit({ embeds: [reloadedEmbed] }).then(m2 => { setTimeout(() => m2.delete(), 15000)}); });
	// } catch (error) {
    //     let errEmbed = new MessageEmbed()
    //     .setColor(bot.colors.web_red)
    //     .setDescription(`Nevarēja pārlādēt: \`${commandName}\``)
    //     .setFooter(message.author.username, message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
    //     .setTimestamp(new Date());

	//     message.channel.send({ embeds: [errEmbed] }).then(m => { setTimeout(() => m.delete(), 15000)});
	// };
};

module.exports.config = {
    name: "reload",
    aliases: ["r"],
    category: "owner",
    cooldown: 0
}