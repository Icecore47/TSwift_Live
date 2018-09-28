const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

        var output = "The current list of commands are:" +
            "\n\t`!rank <YOUR BATTLE TAG>` - This shows your competitive rank" +
            "\n\t`!levels <YOUR BATTLE TAG>` - This shows your level" +
            "\n\t`!endorse <YOUR BATTLE TAG>` - This shows your endorsement level"+
            "\n\t`!teams`- Lists Teams on Server"+
            "\n\t`!serverinfo`- If you Dont know what this mean... We cant help you"+
            "\n\t`And whatever else Ice and Cyber can be bothered adding in the future`"
      
       client.channels.get("477189452544999435").send(output);


};

module.exports.help = {
    name: "Help"
}