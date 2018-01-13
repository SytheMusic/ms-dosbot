const commando = require('discord.js-commando');
const bot = new commando.Client();

class command extends commando.Command {
  constructor() {
    super(bot, {
      name: 'allstar',
      group: 'spam',
      memberName: 'allstar',
      description: 'Lyrics for All Star.'
    });
  }

async run(message, args) {
    message.channel.send('Somebody once told me the world is gonna roll me');
    message.channel.send('I aint the sharpest tool in the shed');
    message.channel.send('She was looking kind of dumb with her finger and her thumb');
    message.channel.send('In the shape of an "L" on her forehead');
    message.channel.send('----------');
    message.channel.send('Well the years start coming and they dont stop coming');
    message.channel.send('Fed to the rules and I hit the ground running');
    message.channel.send('Didnt make sense not to live for fun');
    message.channel.send('Your brain gets smart but your head gets dumb');
    message.channel.send('So much to do, so much to see');
    message.channel.send('So whats wrong with taking the back streets?');
    message.channel.send('Youll never know if you dont go');
    message.channel.send('Youll never shine if you dont glow');
    message.channel.send('----------');
    message.channel.send('Hey now, youre an all-star, get your game on, go play');
    message.channel.send('Hey now, youre a rock star, get the show on, get paid');
    message.channel.send('And all that glitters is gold');
    message.channel.send('Only shooting stars break the mold');
    message.channel.send('----------');
    message.channel.send('The typos are supposed to be here bc coding shit');
    message.channel.send('The pauses arent supposed to be here but coding shit');
  }
}

module.exports = command;
