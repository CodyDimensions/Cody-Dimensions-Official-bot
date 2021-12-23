const keep_alive = require('./keep_alive.js')
const { Client, Message, MessageEmbed, Collection } = require('discord.js')
const fs = require('fs')
var colors = require('colors');
const client = new Client({
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    intents: 32767,
});


module.exports = client;

const config = require('./config.json')
const prefix = config.prefix
const token = process.env.token


client.on("ready", () => {
    console.log(`${client.user.tag} is ready!`.brightGreen)
    console.log(`Default prefix of the bot is ${prefix}`.brightBlue)
    
    const actvs = [
        `${prefix}help | Cody Dimensions`,
        `${prefix}help | ${client.channels.cache.size} channels`,
        `${prefix}help | ${client.users.cache.size} users`,
        `Dimensions of Codes`
    ]

    client.user.setActivity(actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)], { type: 'WATCHING' });
        setInterval(() => {
            client.user.setActivity(actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)], { type: 'WATCHING' });
    }, 5000);
    client.user.setStatus('online')

    
});



//new collections
client.commands = new Collection();
client.aliases = new Collection();
client.events = new Collection();

client.categories = fs.readdirSync('./commands');

//load the files
['command'].forEach((handler) => {
    require(`./handler/${handler}`)(client)
});



client.login(token)