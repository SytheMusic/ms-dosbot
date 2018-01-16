const commando = require('discord.js-commando');
const bot = new commando.Client({
    owner: '329913244389212161'
});
const token = require('D:/secret/token.json');

bot.on('ready', () => {
  bot.user.setGame('Doom on ' + bot.guilds.size + ' servers!');
  console.log(`Started!`);
});

bot.registry.registerGroup('links', 'Links');
bot.registry.registerGroup('spam', 'Spam');
bot.registry.registerGroup('answers', 'Answers');
bot.registry.registerGroup('nc', 'No category');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn('./commands');

bot.login(token.get);
