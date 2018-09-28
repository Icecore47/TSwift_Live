 const Discord = require("discord.js");
 const teams = require("../teams.json");
const constants = require("../constants.json");

module.exports.run = async (client, message, args) => {
      var admin
    for (var t = 0; t < constants.Admin + 0; t++) {
      console.log(message.author.tag,constants.Admin[t]);
        if (message.author.tag == constants.Admin[t])
            admin = true
    }

    var output = "The teams on this sever are:";
                for (var z = 0; z < teams.Teams.length + 0; z++) {
                    output = output + "\n" + teams.Teams[z].Name + " - Who are " + teams.Teams[z].Rank;
                }
                client.channels.get("477189452544999435").send(output);
  
      if (admin==true)
    { message.channel.send.send(output);}
    else
    {client.channels.get("477189452544999435").send(output);}
};

module.exports.help = {
    name: "Teams"
}