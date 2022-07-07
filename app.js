//OTkyMjg4MzAwMzQzNzU0ODIz.GWR-r-.niluJcYLrnopxkJs0x7OFR3ECsk8CERGneZFiQOTkyMjg4MzAwMzQzNzU0ODIz.GWR-r-.niluJcYLrnopxkJs0x7OFR3ECsk8CERGneZFiQ
const { Client, Intents, MessageEmbed } = require("discord.js")
const Discord = require("discord.js")
const config = require('./config/config.json');
require("dotenv").config();

const client = new Client({
    intents: 32767,
    partials: ["CHANNEL", "MESSAGE"],
  });

  client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.color = config.color;
//CODIGO

client.on("guildMemberAdd", async member =>{
    member.client.channels.cache.get("993742343490523146").send({embeds: [new Discord.MessageEmbed()
        .setColor("AQUA")
        .setTitle("🎇A new user has entered!🎇")
        .setAuthor({ name: 'Welcome!🖐', iconURL: 'https://i.imgur.com/H37kxPH.jpeg' })
        .setDescription(`${member.user.username} has entered the server, we hope you have a good time in the community!`)
        .setThumbnail('https://i.imgur.com/H37kxPH.jpeg')
        .setFooter({ text: `${member.user.username}`, iconURL: 'https://i.imgur.com/H37kxPH.jpeg'})
        .setTimestamp()
    ]})
})

    
function requerirhandlers() {
    ["command", "events"].forEach(handler => {
        try {
            require(`./handlers/${handler}`)(client, Discord)
        } catch (e) {
            console.warn(e)
        }
    })
}
requerirhandlers();


client.login(config.token);
