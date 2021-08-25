const tickets = require('../../../functions/cleanups/ticketFunctions');

module.exports = async (bot, interaction) => {
    let i = interaction
    if (!i.isButton()) return;
    
    /* Ticketi */
    if(i.customId === 'createticketwl'){
		tickets.createTicketWL(interaction)
	};
    if(i.customId === 'createticketip'){
		tickets.createTicketIP(interaction)
	};
    if(i.customId === 'deleteticket'){
        tickets.deleteTicket(interaction)
    };
};
