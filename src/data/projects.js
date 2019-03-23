import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.jpg';

const PROJECTS = [
	{
		id:1,
		title: 'Portfolio React Application',
		description: 'This app is built in React, involving JS and core web dev concepts!',
		link: 'http://github.com/Mukul-27/onlineportfolio',
		image: project1
	},
	{
		id:2,
		title: 'Music-Master React Application',
		description: 'Another React App to search tracks of an artist and play song preview.',
		link: 'https://github.com/Mukul-27/music-master',
		image: project1
	},
	{
		id:3,
		title: 'Clock-Countdown React Application',
		description: 'This one shows the time left to a particular date.',
		link: 'https://github.com/Mukul-27/clock-countdown',
		image: project1
	},

	{
		id: 4,
		title: 'Notes Node Application',
		description: 'A Node App that I built, used to create, delete, update and list the notes.',
		link: 'https://github.com/Mukul-27/Notes-app',
		image: project2
	},
	{
		id: 5,
		title: 'Weather Node Application',
		description: 'Another Node App built for practice which shows the weather of any area.',
		link: 'https://github.com/Mukul-27/weather-app',
		image: project2
	},
	{
		id: 6,
		title: 'User Database Express Application',
		description: 'It stores details of a user in a JSON file and can update the details of any user.',
		link: 'https://fast-anchorage-70551.herokuapp.com/',
		image: project4
	},
	{
		id: 7,
		title: 'Express Application',
		description: 'Another basic Express App built for practice puspose.',
		link: 'https://web-server-mukul.herokuapp.com/',
		image: project4
	},
	{
		id: 8,
		title: 'CRUD operations in MongoDB',
		description: 'It performs CRUD operations in MongoDB solely made for practice.',
		link: 'https://github.com/Mukul-27/node-course-2-todo-api',
		image: project5
	}
]

export default PROJECTS;