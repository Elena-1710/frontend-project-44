import readlineSync from 'readline-sync';

// получаем случайное число
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
// функция проверка на четность
const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

// старт игры проверка на четность
const startEvenGame = () => {
// Приветствие
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  // Задаем 3 шага
  const roundCount = 3;

  for (let i = 1; i <= roundCount; i += 1) {
    const randomNumber = getRandomArbitrary(0, 100);
    // правильный ответ
    const qwestionRight = isEven(randomNumber);
    console.log(`Question: ${randomNumber}`);
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

export default startEvenGame;
