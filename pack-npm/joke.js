const jokes = require("give-me-a-joke");
jokes.getRandomDadJoke((joke)=>{
    console.log(joke);
})


jokes.getRandomDadJoke((e)=>{
     module.exports.jojo = e;
});

