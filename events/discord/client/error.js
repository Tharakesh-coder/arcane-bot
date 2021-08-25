module.exports = async (bot, error) => {
    bot.logger.log('error', error.stack)
};