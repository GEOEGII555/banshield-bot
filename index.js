function bot() {
const mineflayer = require('mineflayer')
const express = require('express')
const app = express()
const https = require('https')
const options = {
  hostname: 'https://banshield-bot.herokuapp.com/',
  port: 80,
  path: '/',
  method: 'GET'
}
app.get('/', (req, res) => {
  res.status(200).send('ok')
})
setInterval(function() {
  req = https.request(options, res => {});
  req.end();
}, 5000);
bot2 = mineflayer.createBot({
  host: 'Creshield.aternos.me', // minecraft server ip
  username: 'Как дела?', // minecraft username
  port: 29655,                // only set if you need a port that isn't 25565
  // version: false,             // only set if you need a specific version or snapshot (ie: "1.8.9" or "1.16.5"), otherwise it's set automatically
  // auth: 'mojang'              // only set if you need microsoft auth, then set this to 'microsoft'
})

// Log errors and kick reasons:
bot2.on('kicked', function(e) {bot()})
bot2.on('error', function(e) {bot()})
}
bot();
setInterval(function() {
  bot2.end();
  bot();
}, 10000);
app.listen(process.env.PORT, () => {})
