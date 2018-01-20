const commando = require('discord.js-commando');
const bot = new commando.Client();

class command extends commando.Command {
  constructor() {
    super(bot, {
      name: 'what-library',
      group: 'answers',
      memberName: 'what-library',
      description: 'What library?'
    });
  }

async run(message, args) {
  console.log('!what-library used.')
  message.reply('Discord.js and Discord.js-commando.');
  message.channel.send('Ok i __maybe__ switch to Eris because its also node.js and maybe simpler');
  }
}

module.exports = command;
