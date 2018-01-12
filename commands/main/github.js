const commando = require('discord.js-commando');
const bot = new commando.Client();

class command extends commando.Command {
  constructor() {
    super(bot, {
      name: 'github',
      group: 'main',
      memberName: 'github',
      description: 'Our github repository.'
    });
  }

  async run(message, args) {
    message.reply('Our github repository is at https://github.com/ms-dosbot/ms-dosbot');
  }
}

module.exports = command;
