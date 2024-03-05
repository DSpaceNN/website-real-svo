import {optionsStorage, questionStorage} from "../../../../shared/model/types/surveys";

const factoryOptionId = createIncrementalNumber();
const factoryQuestionSequence = createIncrementalNumber();

export const randOption = (): optionsStorage => ({
  id: String(Math.random() * Math.random()),
  optionText: '',
  isCorrect: false
});

export const randQuestion = (sequence?: number): questionStorage => ({
  questionText: '',
  questionType: 0,
  options: [
    randOption(),
    randOption(),
    randOption()
  ],
  sequence: sequence ?? factoryQuestionSequence(),
  showAnswers: false
});

export function createIncrementalNumber(start?:number) {
  let number = start ??  0;
  return function(): number {
    number++;
    return number;
  };
}