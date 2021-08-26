module.exports.run = async (bot, message, args) => {
    message.delete();
    
    if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send({ content: `<@${message.author.id}>, tev nav pieeju šādai darbībai!` }).then(m => { setTimeout(() => m.delete(), 10000)});

    let text = args.join(" ");
    throw new Error(text);
};

module.exports.config = {
    name: "newerror",
    aliases: ["errornew", "newe"],
    category: "owner"
};