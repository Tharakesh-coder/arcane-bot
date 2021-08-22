const wait = require('util').promisify(setTimeout);
const f = require('../../../functions/cleanups/ticketFunctions');

module.exports = async (bot, interaction) => {
    let i = interaction
    if (!i.isButton()) return;
    
    /* Ticketi */
    if(i.customId === 'createticketwl'){
		f.createTicketWL(interaction)
	};
    if(i.customId === 'createticketip'){
		f.createTicketIP(interaction)
	};
    if(i.customId === 'deleteticket'){
        f.deleteTicket(interaction)
    };
};
