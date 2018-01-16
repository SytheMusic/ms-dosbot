const commando = require('discord.js-commando');
const bot = new commando.Client();

class command extends commando.Command {
  constructor() {
    super(bot, {
      name: 'server',
      group: 'links',
      memberName: 'server',
      description: 'Our Discord server.'
    });
  }

async run(message, args) {
  console.log('!server used.')
  message.reply('Join our server at https://discord.gg/hHT82uj');
  }
}

module.exports = command;
