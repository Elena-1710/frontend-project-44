import mainEngine from '../index.js';
import getRandomArbitrary from '../util.js';
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
  const firstNum = getRandomArbitrary(min, max);
  const secondNum = getRandomArbitrary(min, max);
  const question = `${firstNum} ${secondNum}`;
  const questionRigth = GCD(firstNum, secondNum).toString();
  return { question, questionRigth };
};

const playGCD = () => { mainEngine(getGCD, description); };

export default playGCD;
