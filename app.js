require('./instantHello');
const goodbye = require ('./talk/goodbye');
const talk = require('./talk');
const question = require('./talk/question');

talk.intro();
talk.hello("Dhiulia");

const answer = question.ask("What's the meaning of life?");
console.log(answer);

goodbye();
