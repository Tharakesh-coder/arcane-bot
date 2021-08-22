const wait = require('util').promisify(setTimeout);
const f = require('../../../functions/cleanups/ticketFunctions');

module.exports = async (bot, interaction) => {
    let i = interaction
    if (!i.isButton()) return;
    
    /* Ticketi */
    if(i.customId === 'createticket'){
		f.createTicket(interaction)
	};
    if(i.customId === 'deleteticket'){
        f.deleteTicket(interaction)
    };
};
