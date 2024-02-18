import styles from './style.module.scss';
export const Pagination = ({
	current,
	max,
	toQuestion,
}: {
	current: number;
	max: number;
	toQuestion: (val: number) => void;
}) => {
	const paginationNumbers = [];

	for (let i = 0; i <= max; i++) {
		paginationNumbers.push(i);
	}
	return (
		<div className={`f gap-2 ${styles.pagination}`}>
			{paginationNumbers.map(el => {
				return (
					<a
						key={el}
						className={`${styles.pagination__item} ${
							current === el && styles['pagination__item--active']
						}`}
						onClick={() => toQuestion(el)}
					>
						{el + 1}
					</a>
				);
			})}
		</div>
	);
};
