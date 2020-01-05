const { RichEmbed } = require("discord.js")

module.exports = {
  name: "komendy",
  description: "command bot",
  aliases: ["botinfo"],

  run(msg, args) {
    const { channel } = msg
    const title = "KOMENDY"

    const embed = new RichEmbed()
      .setTitle(title)
      .setColor(0x808080)
      .addField('KOMENDY OGÓLNE', '- !info \n - !ip \n - !komendy \n - !mapa \n - !playerlist \n - !vip \n - !www', true)
      .addBlankField(true)
      .addField('KOMENDY VIP', '- !burza \n - !deszcz \n - !dzien \n - !noc \n - !slonce', true)
      .setFooter('Komendy VIP nie działają przez grę!')
    channel.send(embed)
  },
}