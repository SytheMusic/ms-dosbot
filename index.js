const commando = require('discord.js-commando');
const bot = new commando.Client({
    owner: '329913244389212161',
    unknownCommandResponse: false
});
const token = require('D:/secret/token.json');

bot.on('ready', () => {
  bot.user.setGame('Doom with ' + bot.users.size + ' players!');
  console.log('Started!');
});

bot.registry.registerGroup('links', 'Links');
bot.registry.registerGroup('spam', 'Spam');
bot.registry.registerGroup('answers', 'Answers');
bot.registry.registerGroup('nc', 'No category');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.login(token.get);
