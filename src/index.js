import readlineSync from 'readline-sync';

const play = (generateRound, description) => {
  // Приветствие
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  // выводим инструкцию
  console.log(description);
  const roundsCount = 3;
  // Задаем 3 шага
  for (let i = 1; i <= roundsCount; i += 1) {
    const { question, correntAnswer } = generateRound();
    console.log(`Question: ${question}`);
    // ответ пользователя
    const answer = readlineSync.question('Your answer: ');
    if (correntAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correntAnswer}'. \nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default play;
