//This gets the dependency discord.js.

const Discord = require(`discord.js`);

//This gets the config file within the project

const config = require("./config.json");

//This tells the bot that it is defined as "bot"

const bot = new Discord.Client();

//This declares that prefix is equal to the configs prefix

let prefix = config.prefix;

//This tells the console that the bot has succesfully logged in and is online

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

  //When the bot logs in it constatly checks if a message is sent with the certain characters.

bot.on('message' , message => {

    if (message.content === prefix + '17') {
      message.channel.send(`This is a message for 17`)
    }
  });

  //This logs the bot in with the token
  bot.login(config.token)