const { stripIndents } = require('common-tags');
const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {
    message.delete();

    let embed = new MessageEmbed()
    .setColor(bot.colors.yellow)
    .setAuthor("Arcane.lv informācija", bot.arcaneLogo)
    .setDescription(stripIndents`Mūsu [**Mājaslapa**](http://arcane.lv/)
    Mūsu [**Forums**](http://arcane.lv/forum/)
    Mūsu [**Whitelist anketa**](http://arcane.lv/register)
    Mūsu [**PayPal**](https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=U4L5F8US2S4A8&source=url)`)
    .setFooter(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp(new Date());

    message.channel.send({ embeds: [embed] }).then(m => { setTimeout(() => m.delete(), 20000)})
};

module.exports.config = {
    name: "info",
    aliases: ["arcane"],
    category: "miscellaneous",
    usage: "info",
    description: "Uzrāda informāciju par Arcane.lv"
};