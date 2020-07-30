const Discord = require("discord.js");

exports.run = async (client, message, args) => {
let ping = Math.floor(message.client.ping);

  message.channel.send(":ping_pong: Pong!, " + ping + "ms");

}
