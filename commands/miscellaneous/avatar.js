const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {
    message.delete();

    let member = message.mentions.members.first() || bot.users.cache.find(user => user.tag === args[0]) || bot.users.cache.find(user => user.username === args[0]) || bot.users.cache.get(args[0]) || message.member;

    let embed = new MessageEmbed()
    .setColor(bot.colors.d_blue)
    .setImage(message.member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 4096 }))
    .setAuthor(`${message.member.user.username} avatar.`, message.member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 4096 }))
    .setDescription(`[Links uz bildi](${message.member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 4096 })})`)
    .setTimestamp(new Date())
    .setFooter(message.author.username, message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 4096 }))
    
    message.channel.send({ embeds: [embed] }).then(m => { setTimeout(() => m.delete(), 20000)})
};

module.exports.config = {
    name: "avatar",
    aliases: ["pfp"],
    category: "miscellaneous",
    usage: "avatar (@Lietotājs)",
    description: "Uzrāda noteiktā lietotāja vai tavu profila bildi"
};