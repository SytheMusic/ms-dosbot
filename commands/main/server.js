const commando = require('discord.js-commando');
const bot = new commando.Client();

class command extends commando.Command {
  constructor() {
    super(bot, {
      name: 'server',
      group: 'main',
      memberName: 'server',
      description: 'Our Discord server.'
    });
  }

async run(message, args) {
    message.reply('Join our server at https://discord.gg/hHT82uj');
  }
}

module.exports = command;
