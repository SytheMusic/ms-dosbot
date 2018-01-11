const commando = require('discord.js-commando');
const bot = new commando.Client({
    owner: '329913244389212161'
});

bot.on('ready', () => {
  bot.user.setGame('Doom');
  console.log(`Started!`);
});

bot.registry.registerGroup('main', 'Main');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('Mzk5MTc0ODk4MTkyMjIwMTYx.DTONOg.kUemN1ZxYXpwLCX7Aer7M6Orm14');
