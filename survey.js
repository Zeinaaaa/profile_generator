

const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question('What\'s your name? Nicknames are also acceptable :\)', (answer1) => {
  rl.question('What\'s an activity you like doing?', (answer2) => {
    rl.question('What do you listen to while doing that?', (answer3) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer5) => {
        rl.question('What\'s your favourite thing to eat for that meal?', (answer6) => {
          rl.question('Which sport is your absolute favourite?', (answer7) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer8) => {

              console.log(`${answer1} likes ${answer3} while ${answer2}, devouring ${answer6} for ${answer5}, prefers ${answer7} over any other sport, and amazing at ${answer8}`);
              rl.close();

            })
          })
        })
      })
    }) 
  })
});
