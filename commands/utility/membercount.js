const {MessageEmbed} = require('discord.js')
module.exports = {
    name: 'membercount',
    description: 'Infomation of this server',
    guildOnly: true,
    run : async(client, message, args) => {
			let embed = new MessageEmbed()
      .setTitle(`Total Members`)
      .setDescription(`š„ ${message.guild.memberCount}\n\n**Human**\n\š¤ ${message.guild.members.cache.filter(member => !member.user.bot).size}\n\n**Bot**\nš¤ ${message.guild.members.cache.filter(member => member.user.bot).size}`)
      .setThumbnail(message.guild.iconURL({ size: 4096, dynamic: true }))
      .setTimestamp()
      message.channel.send({ embeds: [embed] })

	}
}