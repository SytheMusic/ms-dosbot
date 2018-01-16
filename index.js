const commando = require('discord.js-commando');
const bot = new commando.Client({
    owner: '329913244389212161'
});
const token = require('D:/secret/token.json');

bot.on('ready', () => {
  bot.user.setGame('Doom on ${client.guilds.size} servers!');
  console.log(`Started!`);
});

bot.registry.registerGroup('main', 'Main');
bot.registry.registerGroup('spam', 'Spam');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login(token.get);
