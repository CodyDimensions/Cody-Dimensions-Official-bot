const { Client, MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Show the help menu.',
    run: async(client, message, args) => {
      let embed = new MessageEmbed()
      .setTitle(`${client.user.username}'s Help Menu`)
      .setDescription(`This help menu shows all the command of this bot.`)
      .setFooter(`Subscribe to Cody Dimensions YouTube Channel`)
      .addField(`🔍 Info`, ` \`help\`, \`ping\` `)
      .addField(`📁 Utility`, ` \`avatar\`, \`membercount\`, \`say\` `)
      .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 4096 }))
      message.channel.send({ embeds: [embed] });




      
    }
    
}