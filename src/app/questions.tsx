import Question1 from './assets/images/question1.png';
import Question1Answer1 from './assets/images/question1_answer1.png';
import Question1Answer2 from './assets/images/question1_answer2.png';
import Question1Answer3 from './assets/images/question1_answer3.png';
import Question1Answer4 from './assets/images/question1_answer4.png';
import Question1Answer5 from './assets/images/question1_answer5.png';
import Question1Answer6 from './assets/images/question1_answer6.png';

import Question2 from './assets/images/question2.png';
import Question2Answer1 from './assets/images/question2_answer1.png';
import Question2Answer2 from './assets/images/question2_answer2.png';
import Question2Answer3 from './assets/images/question2_answer3.png';
import Question2Answer4 from './assets/images/question2_answer4.png';
import Question2Answer5 from './assets/images/question2_answer5.png';
import Question2Answer6 from './assets/images/question2_answer6.png';

import Question3 from './assets/images/question3.png';
import Question3Answer1 from './assets/images/question3_answer1.png';
import Question3Answer2 from './assets/images/question3_answer2.png';
import Question3Answer3 from './assets/images/question3_answer3.png';
import Question3Answer4 from './assets/images/question3_answer4.png';
import Question3Answer5 from './assets/images/question3_answer5.png';
import Question3Answer6 from './assets/images/question3_answer6.png';
import { IQuestion } from './types';

const questions: IQuestion[] = [
	{
		id: 1,
		question: Question1,
		answers: [
			{ id: 'A', image: Question1Answer1 },
			{ id: 'B', image: Question1Answer2 },
			{ id: 'C', image: Question1Answer3 },
			{ id: 'D', image: Question1Answer4 },
			{ id: 'E', image: Question1Answer5 },
			{ id: 'F', image: Question1Answer6 },
		],
		correctAnswerID: 'B',
	},
	{
		id: 2,
		question: Question2,
		answers: [
			{ id: 'A', image: Question2Answer1 },
			{ id: 'B', image: Question2Answer2 },
			{ id: 'C', image: Question2Answer3 },
			{ id: 'D', image: Question2Answer4 },
			{ id: 'E', image: Question2Answer5 },
			{ id: 'F', image: Question2Answer6 },
		],
		correctAnswerID: 'E',
	},
	{
		id: 3,
		question: Question3,
		answers: [
			{ id: 'A', image: Question3Answer1 },
			{ id: 'B', image: Question3Answer2 },
			{ id: 'C', image: Question3Answer3 },
			{ id: 'D', image: Question3Answer4 },
			{ id: 'E', image: Question3Answer5 },
			{ id: 'F', image: Question3Answer6 },
		],
		correctAnswerID: 'F',
	},
];

export default questions;
