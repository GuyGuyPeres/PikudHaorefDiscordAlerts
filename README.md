<div align="center">

  <img src="https://img.shields.io/badge/Discord.js-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord.js" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/API-Pikud_HaOref-red?style=for-the-badge" alt="API" />

  # 🚨 Pikud HaOref Discord Bot
  **Real-time Israeli Home Front Command Alerts for Discord**

  <p align="center">
    <a href="#-overview">Overview</a> •
    <a href="#-features">Features</a> •
    <a href="#-installation">Installation</a> •
    <a href="#-credits--dependencies">Credits</a>
  </p>
</div>

---

## 📖 Overview
This bot provides a critical bridge between official safety data and your community. It monitors the **Pikud HaOref (Home Front Command)** API and broadcasts life-saving alerts directly to a designated Discord channel with high reliability and low latency.

## ✨ Features
* **High-Frequency Polling:** Checks for new alerts every 5 seconds to ensure immediate notification.
* **Smart Deduplication:** Utilizes an ID-tracking system to ensure each alert is only posted once, preventing channel spam.
* **Detailed Notifications:** Includes the alert type, a list of affected cities, and specific safety instructions.
* **Self-Verification:** Built-in startup test sends a dummy alert after 5 seconds to confirm the bot has proper channel permissions.

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd <your-repo-folder>

2. **Install dependencies**
The project requires discord.js, dotenv, and the pikud-haoref-api wrapper.
    ```bash
    npm install discord.js dotenv pikud-haoref-api

3. **Configure Environment**
Create a .env file in the root directory and add your credentials:
DISCORD_TOKEN=your_bot_token
CHANNEL_ID=your_target_channel_id


## ⚙️ Configuration
The bot's behavior is defined in index.js with the following parameters:

* POLL_INTERVAL: Currently set to 5000ms (5 seconds).

* Intents: Uses GatewayIntentBits.Guilds for optimized performance and minimal data overhead.


## 💎 Credits & Dependencies

This project is powered by the following essential dependency:

pikud-haoref-api: An unofficial Node.js API wrapper for Pikud HaOref (Home Front Command) alerts.

Developer: Special thanks to Elad Nava for creating and maintaining the API wrapper that serves as the backbone for this bot's alert retrieval system.

<div align="center">
<sub>Built with ❤️ for safety. Ensure your bot has "Send Messages" and "Embed Links" permissions in the target channel.</sub>
</div>