const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const { yellow, red } = require('../../configs/colors.json');
const wait = require('util').promisify(setTimeout);

async function createTicket(interaction){
    let i = interaction;
    let server = interaction.guild;
    let tUser = interaction.user;
    let channelName = `${tUser.username}-${tUser.discriminator}`;
    let role = server.roles.cache.find(r => r.name == "STAFF");    
    let findChannel = server.channels.cache.find(c => c.name == channelName);

    if(findChannel){
        await i.reply({ content: "Tev jau ir izveidots tickets!", ephemeral: true })
        return;
    };

    server.channels.create(channelName, { reason: `${tUser.tag} izveidoja jaunu ticketu` }).then(channel => {
        let category = server.channels.cache.find(c => c.id == "878768875569831976" && c.type == "GUILD_CATEGORY");
        
        let justCreatedEm = new MessageEmbed()
        .setColor(yellow)
        .setDescription(`Sveicināts <@${tUser.id}>, kāds no administrācijas drīz ieradīsies, lai tev palīdzētu!`)
        .setFooter(server.name, server.iconURL())
        .setTimestamp(new Date());

        let row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId('deleteticket')
            .setLabel('Izdzēst ticketu')
            .setStyle('DANGER')
            .setEmoji('⛔'),
        );
        
        channel.setParent(category.id);
        channel.permissionOverwrites.set([
            { 
                id: tUser.id,
                allow: ['SEND_MESSAGES', 'ADD_REACTIONS', 'VIEW_CHANNEL'],
            },
            { 
                id: role.id,
                allow: ['SEND_MESSAGES', 'ADD_REACTIONS', 'VIEW_CHANNEL']
            },
            {
                id: channel.guild.roles.everyone,
                deny: ['VIEW_CHANNEL', 'SEND_MESSAGES']
            }
        ]);
        channel.send({ content: `<@${tUser.id}>`, embeds: [justCreatedEm], components: [row] })
    }).catch(console.error);
};

async function deleteTicket(interaction){
    let i = interaction;
    let tUser = interaction.user;

    let waitEmbed = new MessageEmbed()
    .setColor(red)
    .setDescription("Šis ticket tiks izdzēsts pēc dažām sekundēm!")
    .setFooter(`${tUser.username}`, tUser.displayAvatarURL())
    .setTimestamp(new Date());

    i.channel.send({ embeds: [waitEmbed] })
    await i.update({ components: [] })
    await wait(3050)
    await i.channel.delete()
};

module.exports = {
    createTicket,
    deleteTicket
};