const commando = require('discord.js-commando');
const bot = new commando.Client();

class command extends commando.Command {
  constructor() {
    super(bot, {
      name: 'randomnumber',
      group: 'main',
      memberName: 'randomnumber',
      description: 'Generates a random number.'
    });
  }

  async run(message, args) {
    var result = Math.floor(Math.random() * 999) + 1;
    message.reply('Your random number is ' + result);
  }
}

module.exports = command;
