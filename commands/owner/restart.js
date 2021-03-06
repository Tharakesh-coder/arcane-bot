const { MessageEmbed } = require("discord.js");
const wait = require('util').promisify(setTimeout);

module.exports.run = async (bot, message, args) => {
       message.delete();
       
       if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send({ content: `<@${message.author.id}>, tev nav pieeju šādai darbībai!` }).then(m => { setTimeout(() => m.delete(), 10000)});

       let type = args[0];
       let member = bot.users.cache.get("286540906335830017");

       let embed = new MessageEmbed()
       .setDescription(`💥 **${bot.user.username}** is restarting! 💥`)
       .setTimestamp(new Date())
       .setFooter(message.author.username, message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
       .setColor(bot.colors.yellow);

       if(!type) type = 1;
       if(type == 1){
              await message.channel.send({embeds: [embed] }).then(m => { setTimeout(() => m.delete(), 1500)});
              wait(1600);
              process.exit();
       };
}

module.exports.config = {
       name: "restart",
       aliases: ["stop", "rr"],
       category: "owner"
}