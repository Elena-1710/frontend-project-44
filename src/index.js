import readlineSync from 'readline-sync';

const play = (generateRound, description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  const roundsCount = 3;
  for (let i = 1; i <= roundsCount; i += 1) {
    const { question, correntAnswer } = generateRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (correntAnswer !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correntAnswer}'. \nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default play;
