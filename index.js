const { Client, GatewayIntentBits, Events } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Logged in as ${readyClient.user.tag}!`);
});

client.on(Events.MessageCreate, async (message) => {
  if (message.author.bot) return;

  const mention = message.mentions.users.find(
    (u) =>
      u.username.toLowerCase() === "high_worrier" ||
      (u.globalName ?? "").toLowerCase() === "high worrier" ||
      (u.globalName ?? "").toLowerCase() === "high_worrier"
  );

  if (mention) {
    await message.reply("Don't worry, High will be here soon 😎");
  }

  if (message.content.toLowerCase().includes("faq")) {
    await message.reply("Click on faq channel to find any important information🎀  ");
  }
});

client.login(process.env.TOKEN);
