import readlineSync from 'readline-sync';

const mainEngine = (startGames, description) => {
  // Приветствие
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  // выводим инструкцию
  console.log(description);
  const roundCount = 3;
  // Задаем 3 шага
  for (let i = 1; i <= roundCount; i += 1) {
    const [question, qwestionRight] = startGames();
    console.log(`Question: ${question}`);
    // ответ пользователя
    const answer = readlineSync.question('Your answer: ');
    if (qwestionRight === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${qwestionRight}'.
    Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default mainEngine;
