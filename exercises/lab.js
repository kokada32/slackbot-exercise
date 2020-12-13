module.exports.ACTIVATE_BOT = true;

module.exports.botScripts = [
    {
        label: "Waiter",
        prompt: "What happens when you wait for the waiter?",
        handler: function () {
            return "In that moment...you become the waiter."
        },
        isListening: true
    },
    {
        label: "Snoop Dogg",
        prompt: "What happens when Snoop Dogg turn 60?",
        handler: function () {
            return "He'll be 420 in dog years."
        },
        isListening: true
    },
    {
        label: "How High",
        prompt: "How high are you?",
        handler: function () {
            return "5'10\""
        },
        isListening: true
    },
    {
        label: "Little Voice",
        prompt: "Isn't it weird we have a little voice in our heads?",
        handler: function () {
            return "Like the one you used to read this."
        },
        isListening: true
    },
    {
        label: "Vacuum Cleaner",
        prompt: "What happens when you clean a vacuum?",
        handler: function () {
            return "You become the vacuum cleaner."
        },
        isListening: true
    },
    {
        label: "Ketchup",
        prompt: "If tomatoes are fruit, then what is ketchup?",
        handler: function () {
            return "A smoothie."
        },
        isListening: true
    },
    {
        label: "Bigger Bed",
        prompt: "What happens when you buy a bigger bed?",
        handler: function () {
            return "You get more bed room, but less bedroom."
        },
        isListening: true
    },
    {
        label: "Hits Blunt",
        prompt: "Hits blunt",
        handler: function () {
            let num = Math.floor(Math.random() * 6);
            if (num === 0) {
                return "If you get out of the shower clean... why does your towel get dirty?"
            } else if (num === 1){
                return "Does a straw have one or two holes?"
            } else if (num === 2){
                return "Is there a synonym for synonym?"
            } else if (num === 3) {
                return "Everything is a boomerang if you throw it straight up."
            } else if (num === 4) {
                return "Ever realize that humans cut down bird's houses to make birdhouses?"
            } else {
                return "Do you think sand is called sand because it is between the sea and land?"
            }
        },
        isListening: true
    }
]