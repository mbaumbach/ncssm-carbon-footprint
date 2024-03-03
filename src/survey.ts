import enquirer from 'enquirer';

export async function survey() {
	const answers = await enquirer.prompt([]);
	console.log(answers);
}

// [
// 	{
// 		type: 'input',
// 		name: 'name',
// 		message: 'What is your name?'
// 	},
// 	{
// 		type: 'numeral',
// 		name: 'age',
// 		message: 'What is your age?'
// 	},
// 	{
// 		type: 'select',
// 		name: 'favoriteFruit',
// 		message: 'What is your favorite fruit?',
// 		choices: ['apples', 'bananas', 'strawberries', 'orange']
// 	}
// ];

// {
// 	type: 'survey',
// 	name: 'experience',
// 	message: 'Please rate your experience',
// 	choices: [
// 		{
// 			name: 'interface',
// 			message: 'The website has a friendly interface.'
// 		},
// 		{
// 			name: 'navigation',
// 			message: 'The website is easy to navigate.'
// 		},
// 		{
// 			name: 'images',
// 			message: 'The website usually has good images.'
// 		},
// 		{
// 			name: 'upload',
// 			message: 'The website makes it easy to upload images.'
// 		},
// 		{
// 			name: 'colors',
// 			message: 'The website has a pleasing color palette.'
// 		}
// 	]
// }
