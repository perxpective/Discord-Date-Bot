# Discord-Date-Bot
Add the bot to your Discord server and ask it for the date (day, month, year).

## Setting up the Bot
> Before we start, log in to the Discord Developer Portal [here](https://discord.com/developers/applications) to create a new application, followed by a bot before embarking on this project.

First, I initiate the `Discord` and `client` variables to create the program for the Discord bot.
```javascript
const Discord = require("discord.js")
const client = new Discord.Client()
```

I use the following code below in order to allow the bot to respond to the messages sent in a Discord server. Under the parameters, I can use `if` statements to program the bot to reply to a message based on certain keywords and prefixes the user messages.
```javascript
client.on('message', (receivedMessage) => {
	if(receivedMessage.author == client.user) {
		return
	} else if (receivedMessage.content.startsWith("@")) {
		processCommand(receivedMessage)
	}
})
```
I initiate the function `processCommand()` to allow the bot to send certain types of messages based on a command sent by a user on the Discord server.

```javascript
function processCommand(receivedMessage) {
	let msgWithoutAt = receivedMessage.content.substr(1)
	let array = msgWithoutAt.split(" ")
	let keyword = array[0]
	let argument = array[1]

```
This function will read the latest message sent by a user, and summoned by a prefixed command. I create variables to separate commands and arguments so that the bot can read them separately. As such, it can perform the actions based on certain commands and arguments.
> `msgWithoutAt`: separates command from prefix
> `array`: splits message into an array where there are spaces in between words
> `keyword`: keyword
> `argument`: argument of the keyword

Next, I can now get the bot to read some messages and look out for some of the keywords by which they will perform actions and send messages.

```javascript

	if(keyword == "help") {
		helpCommand(receivedMessage, argument)
	} else if  (keyword == "date") {
		dateCommand(receivedMessage, argument)
	} else if (keyword == 'ping') {
        receivedMessage.channel.send('PONG!')
    }
}
```

I will create two sub-functions to allow the bot to read the messages and perform some actions based on the command and argument it reads.

```javascript
function helpCommand(receivedMessage, argument) {
	if(argument == "date") {
		receivedMessage.channel.send("Type @date for the date")
	} else {
		receivedMessage.channel.send("Type in an argument pls")
	}
}
```

The `helpCommand()` function will allow the bot to send a message to tell the user to either type "@date" to retrieve the date or type in an argument.

I will also declare a `dateCommand()` function to allow the bot to retrieve the date . However, the user will need to type arguments to either get only the date, month or the year, or get the full date **today**.
```javascript
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
```
Finally, I can run the bot using the `client.login()` function
```javascript
client.login("insert bot token here")
```
> Note: Find the bot token in the Discord Developer Portal, then copy and paste it on to the `client.login()` function. 
> Disclaimer: Don't share your bot token with anyone or post it to the Internet, unless it is a dummy project.

## Dry Run
![screenshot]('https://github.com/perxpective/Discord-Date-Bot/blob/master/Screenshot%202020-07-09%20at%2016.53.15.png')
