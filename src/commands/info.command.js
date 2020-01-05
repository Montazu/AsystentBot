const { RichEmbed } = require("discord.js")

module.exports = {
  name: "info",
  description: "Display bot info.",
  aliases: ["botinfo"],

  run(msg, args) {
    const { channel } = msg
    const title = "INFORMACJE"
    const Author = "Montazu"
    const botDescription =
      "Dnia 01.01.2020r. server będzie hostingowany na https://craftserve.pl/ VIP będzie kosztował 10 PLN"

    const embed = new RichEmbed()
      .setTitle(title)
      .setColor(0xFF0000)
      .setDescription(botDescription)
      .addField("Autor", Author)

    channel.send(embed)
  },
}
