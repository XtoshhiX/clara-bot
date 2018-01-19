const Discord = require("discord.js");
const client = new Discord.Client();

// Set the prefix
let prefix = "c.";

client.on('ready', () => {
    console.log("I'm ready senpai!");
    client.user.setActivity("with flowersss")});


client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;

      if (message.content.startsWith(prefix + "ping")) {
      message.channel.send("**Pong!** :ping_pong:");
    } else
      if (message.content.startsWith(prefix + "cookie")) {
      message.channel.send("**H-here's a cookie** :cookie:");
    } else
      if (message.content.startsWith(prefix + "boop")) {
      message.channel.send("**H-hey! N-noh booping meh nose! >^<**");
    } else
      if (message.content.startsWith(prefix + "rawr")) {
      message.channel.send("**RAAWWWRRRRR** https://imgur.com/t/rawr/TnAEa5l ");
    } else
      if (message.content.startsWith(prefix + "poi")) {
        message.channel.send("**P-POIIII!!! >^<** https://www.tenor.co/EP1u.gif ");
    } else
      if (message.content.startsWith(prefix + "baka")) {
        message.channel.send("**B-ba-ba-baka!!! /)///(\** https://www.tenor.co/xBAy.gif");
    } else
      if (message.content.startsWith(prefix + "hug")) {
        message.channel.send("**H-huggu!!** :heart: https://www.tenor.co/MLKl.gif ");
    } else
      if (message.content.startsWith(prefix + "cuddle")) {
        message.channel.send("**Pyaa~! Cuddle cuddle nuzzle nuzzle >w<** https://www.tenor.co/FQNP.gif ");
    } else
      if (message.content.startsWith(prefix + "qotw")) {
      message.channel.send("“Frost let me talk woman” ~ <@275321920575242252>");
    } else
      if (message.content.startsWith(prefix + "gotw")) {
        message.channel.send("https://i.imgur.com/ce7BQ8h.gif ~ <@394765184201392128>");
    } else
      if (message.content.startsWith(prefix + "frost")) {
        message.channel.send("“i am become turtle” ~ <@177185494646521856>");
    } else
      if (message.content.startsWith(prefix + "benni")) {
        message.channel.send("Ou seems yew found de gif queen <@394765184201392128>");
    } else
      if (message.content.startsWith(prefix + "nova")) {
          message.channel.send("All hail de loli goddess * ^ * <@344856431037775873>");
    } else
    if (message.content.startsWith(prefix + "spency")) {
      message.channel.send("https://www.tenor.co/v0Qz.gif Yis yis is de one and only doge <@275739880838135808>");
    } else
    if (message.content.startsWith(prefix + "help")) {
      message.channel.send("**O-oup, yew need help? OwO Here chu go!!** \n ```Fun Commands~!``` \n ``c.ping`` Pong! :ping_pong: \n ``c.cookie`` Get/give a cookie~! \n ``c.boop`` N-noh using dis command! =3= \n ``2+2=4-1=3`` Jus try it hehe~ \n ``c.rawr`` RAWRRR FEAR MEEEH \n ``c.poi`` P-poi! >^< \n ``c.baka`` B-baka!! \n ``c.hug`` Huuuuggg~! OwO \n ``c.cuddle`` Cuddle? Yus pwease >w< ```Server Commands~!``` \n ``c.qotw`` Quote of the week~! \n ``c.gotw`` Gif of de week~! \n ```Membersss OwO``` \n ``c.frost`` Frosty frostttttt =v= \n ``c.benni`` Wonder who yew find here.. OwO \n ``c.nova`` O-ou... wonder who dis ish... QWQ \n ``c.spency`` Ohohooooo leh surprise command hehe");

  }});

  client.on("message", (message) => {
  if (message.content.startsWith("2+2=4-1=3")) {
  message.channel.send("**:OOO quik mafs!!**");
}});

client.login(process.env.BOT_TOKEN);
