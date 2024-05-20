<h1 align="center">
  <br>
  
  <a href="https://android-discordbot.github.io/web/">
    <img
      src="./assets/android2_removed_cropped.png"
      style="border-radius: 0%"
    >
  </a>

  <br>

  ↁ𝖗𝖔𝖎𝖉

  <br>
</h1>

<h5 align="center">
  Discord Bot created using <a href="https://discord.js.org/">discord.js</a>
</h5>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#use-this-bot">Use This Bot</a> •
  <a href="#web">Web</a> •
</p>

<p align="center">
  <a href="https://github.com/prettier/prettier">
    <img
      style="border-radius: 10px"
      src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"
    >
  </a>

  <a href="https://github.com/eslint/eslint">
    <img
      style="border-radius: 10px"
      src="https://img.shields.io/badge/lint-eslint-blueviolet"
    >
  </a>
</p>

<p align="center">
  <img src="https://android-discordbot.github.io/web/image/bot/meme-command.gif">
</p>

---

# 📩 Features

## Fun

- [x] GIF ➡ [tenor](https://tenor.com/) and [giphy](https://giphy.com/)
- [x] Games ➡ guess the number
- [ ] Reddit Memes
- [x] Search an image from google
- [x] Weather Forecast
- [x] View a member's avatar larger
- [x] Changeable Bot Status
- [ ] Emojify Text
- [x] Ping
- [x] Clear Messages

## Moderation

- [x] Kick
- [x] Ban
- [x] Mute
- [x] Timed Mute
- [x] Unmute
- [x] Ticket
- [x] Rules
- [x] Reactionrole

## Music with [Distube](https://distube.js.org/#/)

- [ ] Play
- [ ] Skip
- [ ] Stop
- [ ] Pause
- [ ] Resume
- [ ] Loop
- [ ] Shuffle
- [ ] Self Mute
- [ ] Self Deafen
- [ ] Seek
- [ ] Dynamic Queue System
- [ ] Autoplay Related Music

---

# 🔨 Use This Bot

## Account Needed

1. Create a bot account [here](https://discord.com/developers/applications)

- create a new application
- click the application that you just created
- in the 'bot' section of your application, copy the bot token

2. Get a tenor api key [here](https://tenor.com/developer/keyregistration)
3. Get the giphy api key [here](https://developers.giphy.com/dashboard/)

- create an account
- create an app
- copy the api key

4. Get Spotify Client ID and Client Secret [here](https://developer.spotify.com/dashboard/login)

- login
- create an app
- click the app
- copy the client id and the client secret

## Set Up Bot

1. You need [Node.js](https://nodejs.org/) installed on your system. Use the LTS version
2. Code editor (optional), I use [Visual Studio Code](https://code.visualstudio.com/)
3. Download the [souce code](https://codeload.github.com/android-discordbot/bot/zip/refs/heads/main)
4. Extract zip file
5. Create a `.env` file in the same folder as `main.js` file, containing:

```text
DISCORD_TOKEN = "yourtokenhere"
TENORKEY = "yourtenorkeyhere"
giphyAPIKey = "yourgiphyapikeyhere"
PREFIX = "#"
clientId = "spotifyclientid"
clientSecret = "spotifyclientsecret"
```

6. Open terminal or cmd
7. Run this command

```powershell
# change the path to where you downloaded the file
cd C:\Users\username123\Downloads\bot-main

# install all missing dependencies
npm install

# run the bot
npm start
```

---

# 🌐 Web

[ↁ𝖗𝖔𝖎𝖉-Web](https://android-discordbot.github.io/web/) - website to show all commands that this bot can do
