'use client';
import { useEffect, useState } from 'react';
import { Navigation, Progress, Question, Pagination, Results } from '@/app/components';
import { IUserAnswer } from '@/app/types';
import data from '../../questions';

const maxIndex = data.length - 1;

export const Quiz = () => {
	const [current, setCurrent] = useState<number>(0);
	const [questions, setQuestoins] = useState<IUserAnswer[]>(data);
	const [seconds, setSeconds] = useState<number>(0);

	const changeCurrent = (num: number) => {
		setCurrent(num);
	};
	const selectAnswer = (question: IUserAnswer) => {
		const newQuestionsArray = questions.map(el => {
			if (el.id === question.id) return question;
			else return el;
		});
		setQuestoins([...newQuestionsArray]);
		changeCurrent(current + 1);
	};

	const startAgain = () => {
		setQuestoins([...data]);
		changeCurrent(0);
		setSeconds(0);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds(prevSeconds => prevSeconds + 1);
		}, 1000);

		if (current > maxIndex) clearInterval(interval);
		return () => {
			clearInterval(interval);
		};
	}, [current]);

	return (
		<>
			{current > maxIndex ? (
				<Results questions={questions} time={seconds} startAgain={startAgain} />
			) : (
				<div>
					<Progress question={current + 1} questions={questions.length} />
					<Navigation
						current={current}
						max={maxIndex}
						time={seconds}
						prev={() => changeCurrent(current - 1)}
						next={() => changeCurrent(current + 1)}
					/>
					<Question question={questions[current]} selectAnswer={selectAnswer} />
					<Pagination current={current} max={maxIndex} toQuestion={changeCurrent} />
				</div>
			)}
		</>
	);
};
