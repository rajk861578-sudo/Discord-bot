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

  const content = message.content.toLowerCase().trim();

  // High_worrier mention
  const mention = message.mentions.users.find(
    (u) =>
      u.username.toLowerCase() === "high_worrier" ||
      (u.globalName ?? "").toLowerCase() === "high worrier" ||
      (u.globalName ?? "").toLowerCase() === "high_worrier"
  );
  if (mention) {
    await message.reply(
      "Don't worry high will be here soon, till staff guide you,mention @staff."
    );
  }

  // !faq command
  if (content === "!faq") {
    await message.reply(
      "faq channel is made to help ppl with basic questions, it is updated regularly, ig you can find your problem here"
    );
    return;
  }

  // !ip command
  if (content === "!ip") {
    await message.reply("check the ip and port channel for ip");
    return;
  }

  // lag or problem in message
  if (content.includes("lag") || content.includes("problem")) {
    await message.reply("open a ticket if facing any lag or problem");
  }

  // faq keyword
  if (content.includes("faq") && !content.startsWith("!faq")) {
    await message.reply(
      "Click on faq channel to find any important information🎀  "
    );
  }

  // Welcome in support team
  if (content.includes("welcome in support team")) {
    await message.reply(
      "don't forget to read Staff information and punishment rules"
    );
  }
});

client.login(process.env.TOKEN);
