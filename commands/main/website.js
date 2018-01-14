const commando = require('discord.js-commando');
const bot = new commando.Client();

class command extends commando.Command {
  constructor() {
    super(bot, {
      name: 'website',
      group: 'main',
      memberName: 'website',
      description: 'Our website.'
    });
  }

async run(message, args) {
  console.log('!website used.')
  message.reply('Our website is at https://ms-dosbot.github.io/');
  }
}

module.exports = command;
