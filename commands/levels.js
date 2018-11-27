const Discord = require("discord.js");
const OW = require('overwatch-api');
const platform = 'pc';
const region = 'global';

module.exports.run = async (client, message, args) => {
    if (args.length == 0) {
        client.channels.get("477189452544999435").send("A player needs a name. `!level <YOUR BATTLE TAG>`")
        return;
    }
    while (args[0] == '') {
        args = args.slice(1);
    }
    var user = args[0].replace("#", "-");
    OW.getProfile(platform, region, user, (err, json) => {
        user = args[0].replace("-", "#");
        if (err instanceof TypeError) {
            client.channels.get("477189452544999435").send(user + `'s profile either is private or it does not exists :frowning:`)
        } else if (err) {
            console.error(err);
           client.channels.get("477189452544999435").send(`I couldn't find ` + user + ` because of a [` + err.name + `] - ` + err.message + " :frowning:")
        } else {
            client.channels.get("477189452544999435").send(user + "'s level is " + json.level);
        }
    });

};

module.exports.help = {
    name: "Levels"
}