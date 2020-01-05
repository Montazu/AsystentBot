const { RichEmbed } = require("discord.js")

module.exports = {
  name: "vip",
  description: "Info VIP",
  aliases: ["botinfo"],

  run(msg, args) {
    const { channel } = msg
    const title = "VIP"

    const embed = new RichEmbed()
      .setTitle(title)
      .setColor(0x9b59b6)
      .addField('CO DAJE VIP?', '- Dostęp do komend VIP \n - Fioletowy nick', true)
      .addBlankField(true)
      .addField('INFO', '5 PLN na 30 dni', true)
      .addField('OPCJE PŁATNOŚCI', '- PayPal \n - Skrill \n - SMS', true)
      .addBlankField(true)
      .addField('POSIADACZE VIP', '- PysioOoO \n - Francik', true)
      .setFooter('Więcej informacji znajdziesz na stronie WWW.')
    channel.send(embed)
  },
}