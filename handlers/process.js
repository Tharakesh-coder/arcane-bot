const { readdirSync } = require("fs");

module.exports = (bot) => {
    const load = dirs => {    
        const events = readdirSync(`./events/process/`).filter(d => d.endsWith('.js'));
        for (let file of events){
            const pct = require(`../events/process/${file}`);
            let pName = file.split('.')[0];
            process.on(pName, pct.bind(null, bot));
        };
    };
    ["client", "guild"].forEach(x => load(x));
};