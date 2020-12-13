// Set this assignment to true if you do want to use it.
module.exports.ACTIVATE_BOT = false;

module.exports.botScripts = [
  {
    label: 'Coffee or Tea',
    prompt: 'Do you like coffee or tea?',
    handler: function () {
      return 'Coffee all the way!';
    },
    isReply: true,
    isListening: true
  },
  {
    label: 'Is Ken a good teacher?',
    prompt: 'Is #{name} a good teacher or nah?',
    handler: function(params) {
      return params.name + " makes me nervous when he doesn't use semicolons, but I have to remember he is a TypeScript-er"
    },
    isListening: true
  },
  {
    label: 'Say something cool',
    prompt: 'Say something cool',
    handler: function() {
      return 'Something cool'
    },
    isListening: true
  },
  {
    label: 'Who will win in a fight',
    prompt: 'If #{name1} and #{name2} were to bare knuckle fight, who would win?',
    handler: function (params) {
      if (params.name2.length > params.name1.length ){
        return params.name2 + " would total beat " + params.name1 + "!"
      } else {
        return params.name1 + " would knock out " + params.name2 + "!"
      }
    },
    isListening: true
  },
  {
    label: 'Boo',
    prompt: 'BOO!',
    handler: function () {
      return 'AH!'
    },
    isListening: true,
    isCaseSensitive: true
  },
  {
    label: 'Even or Odd',
    prompt: 'Is the number #{number as number} even or odd?',
    handler: function (params) {
      if (params.number % 2 === 0) {
        return params.number + " is an even number."
      } else {
        return params.number + " is an odd number."
      }
    },
    isListening: true
  }
];
