const config = require("../../data/config.json"); 
const {client} = require("../../bot.js");
const moment = require("moment");
const chalk = require("chalk");

let prefix = config.BOT.prefix;

client.on("ready", async () => {   
client.user.setPresence({ activity: { name: "Starting / Developer Waisu" }, status: "dnd" });
setInterval(function() {
client.user.setPresence({ activity: { name: "Waisu Was Here!" }, status: "dnd" });
}, 10000);
console.clear();
console.log(chalk `{greenBright [${moment().format('YYYY-MM-DD HH:mm:ss')}]} Prefix {green ${prefix}}`);
console.log(chalk `{greenBright [${moment().format('YYYY-MM-DD HH:mm:ss')}]} {red Waisu} | {blueBright ${client.user.username}} İsmi İle Giriş Yapıldı.`);  
});