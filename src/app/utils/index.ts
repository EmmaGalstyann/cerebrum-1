export const formatTime = (seconds: number) => {
	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	const remainingSeconds = seconds % 60;

	const formattedHours = String(hours).padStart(2, '0');
	const formattedMinutes = String(minutes).padStart(2, '0');
	const formattedSeconds = String(remainingSeconds).padStart(2, '0');

	if (seconds < 3600) {
		return `${formattedMinutes}:${formattedSeconds}`;
	} else return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};
