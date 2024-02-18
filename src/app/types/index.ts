import { StaticImageData } from 'next/image';

export interface IQuestion {
	id: number;
	question: StaticImageData;
	answers: { id: tAnswerId; image: StaticImageData }[];
	correctAnswerID: tAnswerId;
}

export interface IUserAnswer extends IQuestion {
	userAnswerID?: tAnswerId;
}

export type tAnswerId = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
