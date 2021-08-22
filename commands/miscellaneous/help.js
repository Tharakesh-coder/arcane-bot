const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { default_prefix } = require("../../configs/config.json");
const { readdirSync } = require("fs");

module.exports.run = async (bot, message, args) => {
       message.delete();

       let dmEmbed = new MessageEmbed()
       .setDescription(`<@${message.author.id}> paskaties tavos DM!`)
       .setFooter(bot.user.username, bot.user.displayAvatarURL())
       .setTimestamp(new Date())
       .setColor(bot.colors.yellow)

       const embed = new MessageEmbed()
       .setColor(bot.colors.yellow)
       .setAuthor(`${message.guild.me.displayName} Palīdzība`, message.guild.iconURL)
       .setThumbnail(bot.user.displayAvatarURL)
       
       if (!args[0]){
              const categories = readdirSync("./commands/")
  
              embed.setDescription(`Pieejamās komandas \`${message.guild.me.displayName}\`\nBota priedēklis: \`${default_prefix}\``)
              embed.setFooter(`© ${message.guild.me.displayName} | Kopējās komandas: ${bot.commands.size}`, bot.user.displayAvatarURL());
  
              categories.forEach(category => {
                     const dir = bot.commands.filter(c => c.config.category === category)
                     const capitalise = category.slice(0, 1).toUpperCase() + category.slice(1)
                     try {
                            embed.addField(`» ${capitalise} [${dir.size}]:`, dir.map(c => `\`${c.config.name}\``).join(", "))
                     } catch(e) {
                            console.log(e);
                     };
              });
  
              message.channel.send({ embeds: [dmEmbed] }).then(m => { setTimeout(() => m.delete(), 15000)});
              return message.author.send({ embeds: [embed] })
       } else {
              let command = bot.commands.get(bot.aliases.get(args[0].toLowerCase()) || args[0].toLowerCase())
              if(!command) return message.channel.send({ embeds: [embed.setTitle("Nepareiza komanda.").setDescription(`Raksti \`${default_prefix}help\` lai redzētu visas komandas.`)] })
              command = command.config
  
              embed.setDescription(stripIndents`Bota priedēklis: \`${default_prefix}\`\n
              **Komanda:** ${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}
              **Apraksts:** ${command.description || "Apraksts netika atrasts"}
              **Izmantojums:** ${command.usage ? `\`${prefix}${command.name} ${command.usage}\`` : "Lietojums netika atrasts"}
              **Aliases:** ${command.aliases ? command.aliases.join(", ") : "Aliases netika atrastas"}`)
  
              return message.channel.send({ embeds: [embed] })
       }
}

module.exports.config = {
       name: "help",
       aliases: [""],
       category: "miscellaneous",
       usage: "help",
       description: "Uzrāda visas komandas"
}