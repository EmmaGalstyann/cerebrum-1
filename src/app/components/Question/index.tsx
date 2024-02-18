import { IUserAnswer, tAnswerId } from '@/app/types';
import Image from 'next/image';
import styles from './style.module.scss';
import { ChangeEvent } from 'react';

export const Question = ({
	question,
	selectAnswer,
}: {
	question: IUserAnswer;
	selectAnswer: (question: IUserAnswer) => void;
}) => {
	const changeAnswer = (e: ChangeEvent<HTMLInputElement>) => {
		selectAnswer({ ...question, userAnswerID: e.target.value as tAnswerId });
	};
	return (
		<div className={`f flex-wrap justify-between ${styles.question}`}>
			<div className={styles.question__main}>
				<Image fill src={question.question} alt="question" />
			</div>
			<div className={styles.question__content}>
				<h6 className={`text-center ${styles.question__content_title}`}>
					Choose your answer:
				</h6>
				<div className={`f flex-wrap gap-1 ${styles.question__content_answers}`}>
					{question.answers.map(answer => {
						return (
							<label
								key={`question${question.id}-answer${answer.id}`}
								className={`f align-center justify-between gap-1 ${
									styles.question__content_answers_item
								} ${
									question.userAnswerID &&
									styles['question__content_answers_item--disabled']
								} ${
									question.userAnswerID === answer.id &&
									styles['question__content_answers_item--active']
								}`}
							>
								<h2 className="text-center">{answer.id}</h2>
								<input
									type="radio"
									value={answer.id}
									id={`question${question.id}-answer${answer.id}`}
									name={`question${question.id}`}
									checked={question.userAnswerID === answer.id}
									onChange={changeAnswer}
									disabled={question.userAnswerID ? true : false}
								/>
								<Image src={answer.image} alt="answer" width={56} height={42} />
							</label>
						);
					})}
				</div>
			</div>
		</div>
	);
};
