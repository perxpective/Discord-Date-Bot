const Discord = require("discord.js")
const client = new Discord.Client()

client.on('message', (receivedMessage) => {
	if(receivedMessage.author == client.user) {
		return
	} else if (receivedMessage.content.startsWith("@")) {
		processCommand(receivedMessage)
	}
})

function processCommand(receivedMessage) {
	let msgWithoutAt = receivedMessage.content.substr(1)
	let array = msgWithoutAt.split(" ")
	let keyword = array[0]
	let argument = array[1]

	if(keyword == "help") {
		helpCommand(receivedMessage, argument)
	} else if  (keyword == "date") {
		dateCommand(receivedMessage, argument)
	} else if (keyword == 'ping') {
        receivedMessage.channel.send('PONG!')
    }
}

function helpCommand(receivedMessage, argument) {
	if(argument == "date") {
		receivedMessage.channel.send("Type @date for the date")
	} else {
		receivedMessage.channel.send("Type in an argument pls")
	}
}


function dateCommand(receivedMessage, argument) {
  let date = new Date()
	if(argument == "day") {
		receivedMessage.channel.send(date.getDate())
	} else if(argument == "month") {
		receivedMessage.channel.send(date.getMonth() + 1)
	} else if(argument == "year") {
		receivedMessage.channel.send(date.getFullYear())
	} else {
		receivedMessage.channel.send(date.toString())
	}
}

client.login("insert bot token here")
