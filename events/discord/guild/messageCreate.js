const { default_prefix } = require('../../../configs/config.json');

module.exports = async (bot, message) => {
       bot.MSGauthorIMG = message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });
       bot.arcaneLogo = "https://i.ibb.co/GcVJ2zr/arcane.png"

       if(!message.guild) return;
       if(message.guild.id == 873141467999240222) return;

       let staffRoleUsers = message.guild.roles.cache.get('719509669088985139').members.map(m => m.user.id);
       let suggestionChannelID = "686825492057554945";

       if(message.channel.id == suggestionChannelID){
              if(message.author.id == staffRoleUsers){
                     return;
              } else {
                     message.react("<a:6181_check:718439373233717308>");
                     message.react("<:x_:718439672467947581>");
              };
       };

       prefix = default_prefix;
       let args = message.content.slice(prefix.length).trim().split(/ +/g);
       let cmd = args.shift().toLowerCase();
       
       if (message.author.bot || !message.content.startsWith(prefix)) return;
       if (message.content.startsWith(prefix) && message.content.length === prefix.length) return;
       let commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));
       if(!commandfile) return;
       if(commandfile) commandfile.run(bot, message, args);
       
};
