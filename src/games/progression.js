import play from '../index.js';
import getRandom from '../util.js';

const description = 'What number is missing in the progression?';
const getProgression = (startNum, progressionStep, progressionLength) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startNum + i * progressionStep);
  }
  return progression;
};

const playProgression = () => {
  const startNum = getRandom(1, 100);
  const progressionStep = getRandom(1, 20);
  const progressionLength = getRandom(5, 10);

  const progression = getProgression(startNum, progressionStep, progressionLength);
  const answerIndex = getRandom(1, (progression.length - 1));
  const correntAnswer = String(progression[answerIndex]);
  progression[answerIndex] = '..';
  const question = progression.join(' ');
  return { question, correntAnswer };
};
const startProgression = () => { play(playProgression, description); };
export default startProgression;
