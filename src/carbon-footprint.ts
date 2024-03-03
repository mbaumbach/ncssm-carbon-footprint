import { getFootprintResult } from './colors';

export type FootprintAnswers = {
	electric: number;
	gas: number;
	mileage: number;
	shortFlights: number;
	longFlights: number;
	recyclePaper: boolean;
	recycleAluminum: boolean;
};

export function printCarbonFootprint(answers: FootprintAnswers) {
	const paperAmount = answers.recyclePaper ? 0 : 184;
	const aluminumAmount = answers.recycleAluminum ? 0 : 166;
	const footprint =
		answers.electric * 105 +
		answers.gas * 105 +
		answers.mileage * 0.79 +
		answers.shortFlights * 1_100 +
		answers.longFlights * 4_400 +
		paperAmount +
		aluminumAmount;

	console.log(`Your carbon footprint is ${getFootprintResult(footprint)}`);
}
