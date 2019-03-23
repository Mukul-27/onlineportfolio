import React,{ Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import profile from '../assets/profile.png';
import Skills from './Skills';
import BeginnerSkills from './BeginnerSkills';

class App extends Component{
	state = { displayBio: false};
	//constructor(){
	//super();
	//	this.state = { displayBio: false};

	//	console.log('Component This', this);
	//	this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
	//}

	toggleDisplayBio = () => {
		this.setState({ displayBio: !this.state.displayBio});
	}

	render() {
		return(
		<div>
		<img src = {profile} alt ='Profile' className='profile'/>
		<h1>Hello!</h1>
		<p>My name is Mukul.</p>
		<p>I am currently pursuing B.Tech in Electronics And Communication Engineering(ECE) from Bharati Vidyapeeth's College Of Engineering(BVCOE).</p>
		<Title />
		{
		this.state.displayBio ? (
	<div>
		<p>I live in New Delhi.</p>
		<p>Currently Working and like to work on Voluntary Projects and open for suggestions.</p>
		<button onClick = {this.toggleDisplayBio}>Show Less</button>
		</div>
		) : (
			<div>
			<button onClick = {this.toggleDisplayBio}>Read More</button>
			</div>
		)
		}
		<hr />
		<Skills />
		<BeginnerSkills />
		<hr />
		<Projects />
		<hr />
		<SocialProfiles />
		</div>
	)
	}
}



export default App;