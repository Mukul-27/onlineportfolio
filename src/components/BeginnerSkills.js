import React from 'react';
import BEGINNERSKILLS from '../data/beginnerSkills';

const BeginnerSkill = props => {
		const { imageBeginner} = props.beginnerSkill;
		
		return(
		<span>
		<img src={imageBeginner} alt='beginnerSkill' style={{ width: 120, height: 60, margin: 25}} />
		</span>
		)
	
}


const BeginnerSkills = () => (
		<div>
		<h4>Beginner Level Skills</h4>
		<div>
		{
			BEGINNERSKILLS.map(BEGINNERSKILL => {
				return <BeginnerSkill key={BEGINNERSKILLS.id} beginnerSkill={BEGINNERSKILL} />;
			})
		}
		</div>
	</div>
)

export default BeginnerSkills;