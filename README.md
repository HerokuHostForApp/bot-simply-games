const me = new MessageEmbed()
    .setColor("AQUA")
    .setAuthor(
        "Simply Games Community Rules" /*Autor*/,
        "https://i.imgur.com/H37kxPH.jpeg" /* Icono*/,
        "https://discord.com" /* URL */
    )
    .setDescription("These are the rules of our community, it is mandatory to comply with them.")
    .setThumbnail("https://i.imgur.com/H37kxPH.jpeg")
    .setFields(
        {
            "name": "1. Be respectful",
            "value": "You must respect all users, regardless of your liking towards them. Treat others the way you want to be treated.",
        },
        {
            "name": "2. No Inappropriate Language",
            "value": "The use of profanity should be kept to a minimum. However, any derogatory language towards any user is prohibited.",
        },
        {
            "name": "3. No spamming",
            "value": "Don't send a lot of small messages right after each other. Do not disrupt chat by spamming."
        },
        {
            "name": "4. No pornographic/adult/other NSFW material",
            "value": "This is a community server and not meant to share this kind of material.",
        },
        {
            "name": "5. No advertisements",
            "value": "We do not tolerate any kind of advertisements, whether it be for other communities or streams. You can post your content in the media channel if it is relevant and provides actual value (Video/Art)",
        },
        {
            "name": "6. No offensive names and profile pictures",
            "value": "You will be asked to change your name or picture if the staff deems them inappropriate.",
        },
        {
            "name": "7. Server Raiding",
            "value": "Raiding or mentions of raiding are not allowed.",
        },
        {
            "name": "8. Direct & Indirect Threats",
            "value": "Threats to other users of DDoS, Death, DoX, abuse, and other malicious threats are absolutely prohibited and disallowed.",
        },
        {
            "name": "9. Follow the Discord Community Guidelines",
            "value": "You can find them here: https://discordapp.com/guidelines",
        },
        {
            "name": "10. Do not join voice chat channels without permission of the people already in there",
            "value": "If you see that they have a free spot it is alright to join and ask whether they have an open spot, but leave if your presence is not wanted by whoever was there first.",
        },
        {
            "name": "Admins discretion",
            "value": "The Admins and Mods will Mute/Kick/Ban per discretion. If you feel mistreated dm an Admin and we will resolve the issue.",
        },
        {
            "name": "Channels pinned",
            "value": "All Channels will have pinned messages explaining what they are there for and how everything works. If you don't understand something, feel free to ask!"
        },
        {
            "name": "Your presence in this server",
            "value": "Your presence in this server implies accepting these rules, including all further changes. These changes might be done at any time without notice, it is your responsibility to check for them."
        }
    )
    .setTimestamp()
    .setFooter({ text:"Simply Games Network Rules", iconURL:"https://i.imgur.com/H37kxPH.jpeg"})
