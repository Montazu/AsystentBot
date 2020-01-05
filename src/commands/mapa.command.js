const { RichEmbed } = require("discord.js")

module.exports = {
  name: "mapa",
  description: "Mapa świata!",
  aliases: ["botinfo"],

  run(msg, args) {
    const { channel } = msg
    const title = "Mapa świata!"
    const mapa = "https://cdn.discordapp.com/attachments/662717199580135429/662717270455222283/unknown.png"
    const data = "Mapa z dnia: 04.01.2020"

    const embed = new RichEmbed()
      .setTitle(title)
      .setColor(0x00cc99)
      .setImage(mapa)
      .setFooter(data)

    channel.send(embed)
  },
}
