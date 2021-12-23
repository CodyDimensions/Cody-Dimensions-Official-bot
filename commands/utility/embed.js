const { MessageEmbed } = require("discord.js")
module.exports = {
    name: "embed",
    description: "Make an embed!",
    usage: "<hex color> <text>",
    run : async(client, message, args) => {
      const color = args[0]
      let errorEmbed = new MessageEmbed()
      .setDescription(`**Please give an embed hex color!**\n[Click here to use the colour picker and copy the hex colour](https://www.google.com/search?q=color+picker)`)
       if(!color) return message.channel.send({embeds: [errorEmbed] })
      const description = args.slice(1).join(" ")
      if(!description) return message.reply("**Please give an embed description!**")

      let embed = new MessageEmbed()
      .setColor(color)
      .setDescription(`${description}`)
      message.channel.send({embeds: [embed] })

    }
}