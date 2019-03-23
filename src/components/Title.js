import React, { Component } from 'react';

const TITLE = [
	'a music lover',
	'a movie nerd',
	'constantly trying to improve my skills as a web developer',
	'an enthusiastic learner',
	'a team player'
];

class Title extends Component{
	state = { titleIndex: 0, fadeIn: true };


	componentDidMount() {
		this.timeout = setTimeout(() => this.setState({fadeIn: false}),2000);

		this.animateTitles();
	}

	componentWillUnmount() {
		clearInterval(this.titleInterval); 
		clearTimeout(this.timeout);
	}

	animateTitles = () => {
		this.titleInterval = setInterval(() => {
			const titleIndex = (this.state.titleIndex + 1) % TITLE.length;

			this.setState({ titleIndex, fadeIn: true });

			this.timeout = setTimeout(() => this.setState({fadeIn: false}),2000);
		}, 4000);
	}

	render() {
		const {titleIndex, fadeIn} = this.state

		const title = TITLE[titleIndex];

		return(
			<p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {title}.</p>
		)
	}
}

export default Title;
