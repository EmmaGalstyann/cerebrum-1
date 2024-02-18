import { Inter } from 'next/font/google';
const inter = Inter({ weight: '400', subsets: ['latin'] });

import styles from './style.module.scss';
export const Progress = ({ question, questions }: { question: number; questions: number }) => {
	const persent = (question / questions) * 100;
	return (
		<div className={styles.progress}>
			<div className={styles.progress__absolute} style={{ width: `${persent}%` }}></div>
			<p
				className={`f justify-center align-center ${inter.className} ${styles.progress__content}`}
			>
				{question}/{questions}
			</p>
		</div>
	);
};
