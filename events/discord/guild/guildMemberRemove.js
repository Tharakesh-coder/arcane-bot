module.exports = async (bot, member) => {
    let server = member.guild;
    let mUser = member.user
    let channelName = `${mUser.username}-${mUser.discriminator}-ip` || `${mUser.username}-${mUser.discriminator}-wl`;
    let findChannel = server.channels.cache.find(c => c.name == channelName);

    if(findChannel){
        findChannel.delete(`${mUser.username} left the server.`);
    };
};