const { MessageEmbed, Message } = require("discord.js");

module.exports = {
    name: 'purge',
    description: "Purge an amount of messages.",
    aliases: ['purge', 'clear'],
    run: async(client, message, args) => {
        if(!message.member.permissions.has('MANAGE_MESSAGES')) {
            return message.reply('**You do not have permission to use this command.**')
        }

        let member = message.mentions.members.first();
        let channelMessages = message.channel.messages.fetch();
        
        if(member) {
          let userMsg = (await channelMessages).filter((m) => m.author.id === member.id)
          await message.channel.bulkDelete(userMsg, true)
          await message.channel.send(`Deleted ${userMsg} messages.`).then(message => message.delete({timeout: 5000}))
        } else {
          
        if (!args[0]) {
            return message.reply("Please specify an amount between 1-100!")
        }
        
        if(isNaN(args[0])) {
          return message.reply('Please specify an amount between 1-100!')
        }

        let deleteAmount;

        if (parseInt(args[0]) > 99) {
            return message.reply('I can only delete 99 messages!')//deleteAmount = 100;

        } else {
            deleteAmount = parseInt(args[0]);
        }

        await message.channel.bulkDelete(deleteAmount, true);
      
        await message.channel.send(`Deleted ${deleteAmount} messages.`).then(message => message.delete({timeout: 5000}))




        }

    }
}