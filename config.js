module.exports = {
        TOKEN: 'OTU0MjA5NTg4MDU0NDU4Mzc4.YjPy7g.Uo3w2m3YDGZovyi1wkBXt3U_O-c', //write your discord bot token
        px: '!',
        playing: 'Umut Bayraktar ❤️ Music Bot',

    opt: {
        DJ: {
            enabled: false, //IF YOU WANT ONLY DJS TO USE IT, set false to true.
            roleName: 'DJ', //WRITE WHAT THE NAME OF THE DJ ROLE WILL BE, THEY CAN USE IT ON YOUR SERVER
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume'] //Please don't touch
        },
        selfDeaf: false, //IF YOU WANT TO DEAF THE BOT, set false to true.
        maxVol: 100, //You can specify the maximum volume level.
        loopMessage: false, //Please don't touch
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio', //Please don't touch
                highWaterMark: 1 << 25 //Please don't touch
            }
        }
    }
};
