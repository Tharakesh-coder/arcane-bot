const { MessageEmbed } = require('discord.js');
const f = require('../../functions/cleanups/readyFunctions.js');

module.exports.run = async (bot, message, args) => {
    message.delete();
    
    if(!message.author.permissions.has("ADMINISTRATOR")) return message.channel.send({ content: `<@${message.author.id}>, tev nav pieeju šādai darbībai!` }).then(m => { setTimeout(() => m.delete(), 10000)});

    let embed = new MessageEmbed()
    .setColor(bot.colors.green)
    .setDescription(`All statuses have been reset!`)
    .setFooter(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp(new Date());

    message.channel.sendTyping();
    wait(1000)
    f.setStatuses(bot);
    message.channel.send({ embeds: [embed] }).then(m => { setTimeout(() => m.delete(), 15000)});
};

module.exports.config = {
    name: "reload",
    aliases: ["r"],
    category: "owner",
    cooldown: 0
}