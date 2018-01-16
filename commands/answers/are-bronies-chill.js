const commando = require('discord.js-commando');
const bot = new commando.Client();

class command extends commando.Command {
  constructor() {
    super(bot, {
      name: 'are-bronies-chill',
      group: 'answers',
      memberName: 'are-bronies-chill',
      description: 'Are bronies chill?'
    });
  }

async run(message, args) {
  console.log('!are-bronies-chill used.')
  message.reply('Yes. My owner watches MLP and its a great show. You should watch it too! You can start at http://www.bronytv.net/');
  message.channel.send('*cought* sponsor me *cough*')
  }
}

module.exports = command;
