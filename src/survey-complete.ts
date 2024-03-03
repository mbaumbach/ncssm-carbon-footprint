import enquirer from 'enquirer';
import { printCarbonFootprint, type FootprintAnswers } from './carbon-footprint';

export async function survey() {
	const answers = await enquirer.prompt<FootprintAnswers>([
		{
			type: 'number',
			name: 'electric',
			message: 'How much is your monthly electric bill?'
		},
		{
			type: 'number',
			name: 'gas',
			message: 'How much is your monthly gas bill?'
		},
		{
			type: 'number',
			name: 'mileage',
			message: 'What is your total yearly mileage on your car?'
		},
		{
			type: 'number',
			name: 'shortFlights',
			message: 'How many short flights (4 hours or less) did you take in the past year?'
		},
		{
			type: 'number',
			name: 'longFlights',
			message: 'How many long flights (more than 4 hours) did you take in the past year?'
		},
		{
			type: 'confirm',
			name: 'recyclePaper',
			message: 'Do you recycle paper?'
		},
		{
			type: 'confirm',
			name: 'recycleAluminum',
			message: 'Do you recycle aluminum?'
		}
	]);
	printCarbonFootprint(answers);
}
