const { MessageEmbed } = require("discord.js")
module.exports = {
    name: "announce",
    description: "Make an embed announcement!",
    usage: "<hex color> <text>",
    run : async(client, message, args) => {
      const color = args[0]
      let textchannel = message.mentions.channels.first()
      
      if(!message.member.permissions.has('MANAGE_MESSAGES')) {
        return message.reply('**You do not have permission to use this command.**') 
      }

      if(!color) {
        let errorEmbed = new MessageEmbed()
        .setDescription(`**Please give an embed hex color!**\n[Click here to use the colour picker and copy the hex colour](https://www.google.com/search?q=color+picker)`)
        return message.channel.send({embeds: [errorEmbed] })
      } 
      
      if(!textchannel) {
        return message.reply("**Please specify a channel to send the embed!**")
      }

      const description = args.slice(2).join(" ")
      if(!description) {
        return message.reply("**Please give an embed description!**")
      }


        let embed = new MessageEmbed()
        .setColor(color)
        .setDescription(`${description}`)
          textchannel.send({embeds: [embed] })

      

    }
}