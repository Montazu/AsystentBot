module.exports = {
    name: "burza",
    description: "This command set the thunder on the server",
  
    run(msg, args ) {
      const ip = "659682996764540928"
      
      if (!msg.member.roles.find(r => r.name === "VIP")) {
        return msg.channel.send('Nie masz uprawnień!')
      }         
      else {
        msg.channel.send("Ustawiono burzę!"),
        msg.client.channels.get(ip).send("weather thunder")
      }
    },
  }