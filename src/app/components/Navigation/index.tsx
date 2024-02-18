'use client';
import { useEffect, useState } from 'react';
import IconArrow from '../../assets/icons/arrow.svg';
import IconTimer from '../../assets/icons/timer.svg';

import styles from './style.module.scss';
import { formatTime } from '@/app/utils';

export const Navigation = ({
	time,
	current,
	max,
	prev,
	next,
}: {
	time: number;
	current: number;
	max: number;
	prev: () => void;
	next: () => void;
}) => {
	return (
		<div className={`f justify-between align-center ${styles.navigation}`}>
			<a
				className={`f justify-center align-center ${styles.navigation__arrow} ${
					styles['navigation__arrow--prev']
				} ${current === 0 && styles['navigation__arrow--invisible']}`}
				onClick={prev}
			>
				<IconArrow />
			</a>
			<div className={`f justify-center align-center gap-1 ${styles.navigation__time}`}>
				<IconTimer />
				<h6>{formatTime(time)}</h6>
			</div>
			<a
				className={`f justify-center align-center ${styles.navigation__arrow} ${
					current === max && styles['navigation__arrow--invisible']
				}`}
				onClick={next}
			>
				<IconArrow />
			</a>
		</div>
	);
};
