const filename = "index.js";

const hello = function (name) {
    console.log('Hello ' + name);
};

const intro = function (){
    console.log("I'm a node file called " + filename);
};

module.exports = {
    hello: hello,
    intro: intro
};