require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const pikudHaoref = require('pikud-haoref-api');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const POLL_INTERVAL = 5000; // every 5 seconds
const sentAlertIds = new Set(); // avoid duplicate messages

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);

// --- TEST BLOCK START ---
  console.log("Sending a test alert in 5 seconds...");
  setTimeout(() => {
    const dummyAlert = {
      id: "test-12345",
      title: "בדיקה (Test Alert)",
      cities: ["תל אביב - יפו", "חיפה"],
      instructions: "This is a test of the Discord bot system. No action required.",
      type: "Test"
    };
    
    // Call existing send function directly
    const channel = client.channels.cache.get(process.env.CHANNEL_ID);
    if (channel) {
        const cityList = dummyAlert.cities.join(', ');
        const message = `🚨 **TEST Alert: ${dummyAlert.type}**\n📍 Cities: ${cityList}\n ℹ️ ${dummyAlert.instructions}`;
        channel.send(message);
    }
  }, 5000);
  // --- TEST BLOCK END ---

  const channel = client.channels.cache.get(process.env.CHANNEL_ID); // <-------------- ZE HA CHANNEL 
  if (!channel) return console.error('Channel not found!');

  const poll = () => {
    // Remove proxy option if running from Israel
    const options = {
      // proxy: 'http://user:pass@israeli-proxy:port/'
    };

    pikudHaoref.getActiveAlerts((err, alerts) => {
      setTimeout(poll, POLL_INTERVAL);

      if (err) return console.error('Alert fetch error:', err);

      for (const alert of alerts) {
        if (sentAlertIds.has(alert.id)) continue; // already sent
        sentAlertIds.add(alert.id);

        const cityList = alert.cities.join(', ') || 'Unknown';
        const message = `🚨 **Red Alert: ${alert.type}**\n📍 Cities: ${cityList}\n ℹ️ ${alert.instructions}`;
        channel.send(message).catch(console.error);
      }
    }, options);
  };

  poll();


});



client.login(process.env.DISCORD_TOKEN);