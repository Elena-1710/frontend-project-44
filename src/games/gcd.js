import play from '../index.js';
import getRandom from '../util.js';
// Инструкция
const description = 'Find the greatest common divisor of given numbers.';

const GCD = (firstNumber, secondNumber) => {
  let gcd = 1;
  for (let i = 2; i <= firstNumber; i += 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      gcd = i;
    }
  } return gcd;
};
const getGCD = () => {
  const min = 1;
  const max = 100;
  const firstNum = getRandom(min, max);
  const secondNum = getRandom(min, max);
  const question = `${firstNum} ${secondNum}`;
  const correntAnswer = GCD(firstNum, secondNum).toString();
  return { question, correntAnswer };
};

const playGCD = () => { play(getGCD, description); };

export default playGCD;
