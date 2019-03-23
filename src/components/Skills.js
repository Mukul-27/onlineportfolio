import React from 'react';
import SKILLS from '../data/skills';


const Skill = props => {
		const { image } = props.skill;
		
		return(
		<span>
		<img src={image} alt='skill' style={{ width: 120, height: 60, margin: 25}} />
		</span>
		)
	
}

const Skills = () => (
		<div>
		<h2>Skills</h2>
		<div>
		{
			SKILLS.map(SKILL => {
				return <Skill key={SKILLS.id} skill={SKILL} />;
			})
		}
		</div>
		</div>
		)

export default Skills;