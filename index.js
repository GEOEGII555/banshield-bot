function bot() {
const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'hamlet.aternos.host', // minecraft server ip
  username: 'Bot_BanShield', // minecraft username
  port: 60623,                // only set if you need a port that isn't 25565
  // version: false,             // only set if you need a specific version or snapshot (ie: "1.8.9" or "1.16.5"), otherwise it's set automatically
  // auth: 'mojang'              // only set if you need microsoft auth, then set this to 'microsoft'
})

// Log errors and kick reasons:
bot.on('kicked', function(e) {bot()})
bot.on('error', function(e) {bot()})
}
bot()
