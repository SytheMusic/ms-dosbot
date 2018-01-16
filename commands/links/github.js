const commando = require('discord.js-commando');
const bot = new commando.Client();

class command extends commando.Command {
  constructor() {
    super(bot, {
      name: 'github',
      group: 'links',
      memberName: 'github',
      description: 'Our github repository.'
    });
  }

async run(message, args) {
  console.log('!github used.')
  message.reply('Our github repository is at https://github.com/ms-dosbot/ms-dosbot');
  }
}

module.exports = command;
