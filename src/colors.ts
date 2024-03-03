import chalk from 'chalk';

export function getFootprintResult(footprint: number) {
	if (footprint >= 22_000) {
		return chalk.white.bgRedBright.bold(' HIGH ');
	} else if (footprint >= 16_000) {
		return chalk.white.bgGray(' AVERAGE ');
	} else if (footprint >= 6_000) {
		return chalk.white.bgBlueBright(' LOW ');
	} else {
		return chalk.black.bgWhite(' VERY LOW ');
	}
}

export function colors() {
	console.log('Hello, ' + chalk.whiteBright.bgMagentaBright(' SMathHacks '));

	// const footprint = 500;
	// console.log(`Your carbon footprint is ${getFootprintResult(footprint)}`);
}
