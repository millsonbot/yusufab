const express = require("express");
const { Client, RichEmbed } = require("discord.js");
const app = express();
const chalk = require("chalk");
const fs = require("fs");
const ytdl = require("ytdl-core");
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
const http = require("http");
app.get("", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});


const Discord = require("discord.js");
const client = new Discord.Client();
const data = new Map();



const lordcreative1 = new Discord.Client("ODA4ODEyNTY0MzMwMTg0NzE0.YCL_ig.NgOPtwMBpIM8au0_jyuiB94SePw");
const lordcreative2 = new Discord.Client();
const lordcreative3 = new Discord.Client();
const lordcreative4 = new Discord.Client();
const lordcreative5 = new Discord.Client();
const lordcreative6 = new Discord.Client();
const lordcreative7 = new Discord.Client();
const lordcreative8 = new Discord.Client();
const lordcreative9 = new Discord.Client();
const lordcreative10 = new Discord.Client();
const lordcreative11 = new Discord.Client();
const lordcreative12 = new Discord.Client();
const lordcreative13 = new Discord.Client();
const lordcreative14 = new Discord.Client();
const lordcreative15 = new Discord.Client();
const lordcreative16 = new Discord.Client();
const lordcreative17 = new Discord.Client();
const lordcreative18 = new Discord.Client();
const lordcreative19 = new Discord.Client();
const lordcreative20 = new Discord.Client();
const lordcreative21 = new Discord.Client();
const lordcreative22 = new Discord.Client();
const lordcreative23 = new Discord.Client();
const lordcreative24 = new Discord.Client();

lordcreative1.login("Nzk4NDYwMTI2OTI2MzQwMDk2.X_1V8g.77K23-HETchniiDyXfGgjmw4OGo");
lordcreative2.login("Nzk4NDU4ODQ1MzUyOTUxODA4.X_1Uzg.mrE_7huxQMblwAZnXK1Dn9WVPaA");
lordcreative3.login("Nzk4NDU5NDUzODY3MTYzNjk4.X_1VUg.dnqM2XB8AJ4flqNKIldGVMRqp6I");
lordcreative4.login("Nzk4NDU5NzI3MTMzNTQwMzYz.X_1Vkw.sNB-XFZCC_AbDVeGIMh_R7pBnoA");
lordcreative5.login("Nzk4NDYwNDkyNjYxNzg0NTc2.X_1WSQ.C_XbtoXf9ytgV9G3D35BSeNIAbg");
lordcreative6.login("Nzk4NDYxMTA0NzM2MzA1MTYz.X_1W2w.OG4R4IkxYNmmJVFTzXP8hkH68Wc");
lordcreative7.login("Nzk4NDYxNDIxNDQwMjA0ODQw.X_1XJw.biv1CVc-Mu5s6NKz-aOQ-i-DKA0");
lordcreative8.login("Nzk4NDYyNzUyMzIyMDkzMDY3.X_1YZA.kWl_jSBW3WcFG9fACPETiFxf4NA");
lordcreative9.login("Nzk4NDYzMjMwNzQ0OTg1NjA0.X_1Y1g.9UToMfvbfETrE8z2gDiuH4jzB4c");
lordcreative10.login("Nzk4NDYzODMwODc5MjQwMjEy.X_1ZZQ.fi3vOw9jEa5saA54LUjhGRDb_A4");
lordcreative11.login("Nzk4NDY0MjYyNzQ5NTUyNjgw.X_1ZzA.xgoBTtXFR3VxjYaIpWKUChe_hqY");
lordcreative12.login("Nzk4NDY0NDQzNTczODYyNDEx.X_1Z9w.YhUMhH2iX7nMgxAAfoXSXN5UB7Y");
lordcreative13.login("Nzk4NDY0NzMzNzE1MTAzNzQ0.X_1aPA.WIWVRPeC3_KxsAlB8S4CNmOdbd4");
lordcreative14.login("Nzk4NDY0OTk5NzYwNDYxODM0.X_1afQ.SzLQ-VYpcGaZ1i3w-0OiIR8_tw8");
lordcreative15.login("Nzk4NDY1MzU5NDUwODY1Njc1.X_1a0g.3GDEbydMaccAsTDx35d2wjszKGY");
lordcreative16.login("Nzk4NDY3NTQyNTExMjU1NTcz.X_1c2g.aurmZ_-99NtqrK-e8cHW9HKWRmQ");
lordcreative17.login("")
lordcreative18.login("")
lordcreative19.login("")  
lordcreative20.login("")
lordcreative21.login("")
lordcreative22.login("")
lordcreative23.login("")
lordcreative24.login("")




client.on("lordcreative", async function() {
const voiceChannel = "798503148704497686"
client.channels.cache.get(voiceChannel).join()
.catch(err => {
throw err;
})
})



lordcreative1.on("message", async msg => {
  if (msg.content.toLowerCase() === "!yusuf") {
    const streamOptions = { seek: 5, volume: 5 };
    var kanal = msg.member.voiceChannel;
    kanal.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      })
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});



lordcreative2.on("message", async msg => {
  if (msg.content.toLowerCase() === "!yusuf") {
    const streamOptions = { seek: 5, volume: 5 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative3.on("message", async msg => {
    if (msg.content.toLowerCase() === "!yusuf") {
    const streamOptions = { seek: 5, volume: 2};
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative4.on("message", async msg => {
  if (msg.content.toLowerCase() === "!yusuf") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative5.on("message", async msg => {
  if (msg.content.toLowerCase() === "!yusuf") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative6.on("message", async msg => {
  if (msg.content.toLowerCase() === "!yusuf") {
    const streamOptions = { seek: 5, volume: 1500 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative7.on("message", async msg => {
  if (msg.content.toLowerCase() === "!yusuf") {
    const streamOptions = { seek: 5, volume: 10 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s",   {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative8.on("message", async msg => {
  if (msg.content.toLowerCase() === "!yusuf") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative9.on("message", async msg => {
  if (msg.content.toLowerCase() === "!yusuf") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative10.on("message", async msg => {
  if (msg.content.toLowerCase() === "!yusuf") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative11.on("message", async msg => {
  if (msg.content.toLowerCase() === "!yusuf") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative12.on("message", async msg => {
  if (msg.content.toLowerCase() === "!yusuf") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative13.on("message", async msg => {
  if (msg.content.toLowerCase() === "!yusuf") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative14.on("message", async msg => {
  if (msg.content.toLowerCase() === "!yusuf") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative15.on("message", async msg => {
  if (msg.content.toLowerCase() === "!yusuf") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative16.on("message", async msg => {
  if (msg.content.toLowerCase() === "!yusuf") {
    const streamOptions = { seek: 5, volume: 1500 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative17.on("message", async msg => {
  if (msg.content.toLowerCase() === "!yusuf") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative18.on("message", async msg => {
  if (msg.content.toLowerCase() === "!yusuf") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative19.on("message", async msg => {
  if (msg.content.toLowerCase() === "!yusuf") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative20.on("message", async msg => {
  if (msg.content.toLowerCase() === "!yusuf") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative21.on("message", async msg => {
  if (msg.content.toLowerCase() === "!yusuf") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative22.on("message", async msg => {
  if (msg.content.toLowerCase() === "!yusuf") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative23.on("message", async msg => {
  if (msg.content.toLowerCase() === "!yusuf") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https://www.youtube.com/watch?v=wbi90wJRXaE&t=4s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

lordcreative24.on("message", async msg => {
  if (msg.content.toLowerCase() === "!yusuf") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

