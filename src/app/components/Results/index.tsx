import { IUserAnswer } from '@/app/types';
import styles from './style.module.scss';
import { formatTime } from '@/app/utils';
export const Results = ({
	questions,
	time,
	startAgain,
}: {
	questions: IUserAnswer[];
	time: number;
	startAgain: () => void;
}) => {
	return (
		<div className={styles.result}>
			<div className={styles.result__time}>
				<h6>Your time</h6> - <p>{formatTime(time)}</p>
			</div>
			{questions.map(el => {
				return (
					<div key={el.id} className={`${styles.result__item}`}>
						<div className="f gap-2">
							<h6>Your answer</h6> - <p>{el.userAnswerID}</p>
						</div>
						<div className={`f gap-2 ${styles['result__item--correct']}`}>
							<h6>Correct Answer</h6> - <p>{el.correctAnswerID}</p>
						</div>
					</div>
				);
			})}
			<div className="f justify-center">
				<button className="btn" onClick={startAgain}>
					Start again
				</button>
			</div>
		</div>
	);
};
