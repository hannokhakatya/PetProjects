export const tranformCourseDurationIntoString = (duration) => {
	let hours = Math.floor(+duration / 60);
	let min = +duration % 60;
	if (hours < 10) {
		hours = '0' + hours;
	}
	if (min < 10) {
		min = '0' + min;
	}
	return `${hours}:${min}`;
};
