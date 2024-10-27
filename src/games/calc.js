import mainEngine from '../index.js';
import getRandomArbitrary from '../util.js';
// Инструкция
const gescription = 'What is the result of the expression?';

// выполним действия '+', '-', '*'

const calculate = (operation, firstNum, secondNum) => {
  switch (operation) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      return `operator ${operation} is not use`;
  }
};

const getOperation = () => {
  const arithmeticsing = ['+', '-', '*'];
  const operation = arithmeticsing[getRandomArbitrary(0, arithmeticsing.length - 1)];
  const firstNum = getRandomArbitrary(0, 100);
  const secondNum = getRandomArbitrary(0, 100);
  const question = `${firstNum} ${operation} ${secondNum}`;
  const questionRigth = calculate(operation, firstNum, secondNum).toString();
  return [question, questionRigth];
};

const getCalc = () => { mainEngine(getOperation, gescription); };
export default getCalc;
