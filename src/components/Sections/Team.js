import React from 'react'

export const Team = () => {
	var people = [
		{
			name: "Everett Joseph, PhD",
			about: "Dr. Joseph is the Director of the The Center of Excellence in Weather Enterprise, as well as the Atmospheric Sciences Research Center at UAlbany, and is an internationally recognized leader in the field of atmospheric sciences.  ",
			pic: 'img/team/Everett.jpg',
			job: "( Director )"
		},
		{
			name: "Chris Thorncroft, PhD",
			about: "Dr. Thorncroft is Chair of the University at Albany’s Department of Atmospheric and Environmental Sciences, and an internationally recognized leader in the field of atmospheric sciences.",
			pic: 'img/team/Chris.jpg',
			job: "( Co-Director )"
		},
		{
			name: "Colby Creedon, JD/MBA",
			about: "Mr. Creedon works to understand weather-related business problems and connect those problems with solutions developed by the University at Albany’s atmospheric sciences research team.",
			pic: 'img/team/Colby.jpg',
			job: "( Business Development Director )",
			email: "mailto:ccreedon@albany.edu"
		}
	]

	var items = people.map(person => {
		return (
			<div className='item col-md-4'>
			  <div className='team-item'>
					<div className='team-item-img'>
					  <img src={person.pic} alt />
					  <div className='team-item-detail'>
							<div className='team-item-detail-inner light-color'>
							  <h5>{person.name}</h5>
							  <p style={{textAlign:'left'}}>{person.about}</p>
							  <ul className='social'>
								<li><a href={person.email} target='_blank'><i className='fa fa-paper-plane' /></a></li>
							  </ul>
							</div>
					  </div>
					</div>
					<div className='team-item-info'>
				  	<h6>{person.name}</h6>
				  	<p className>{person.job}</p>
					</div>
			  </div>
			</div>
		)
	})

	return (
		<section id='elements' className='section-padding text-center'>
		  <div className='container'>
			<h2 className='page-title'>Our <span className='text-light'>Team</span></h2>
		  </div>
		  <div className='container'>
				<div className='row'>
					{items}
				</div>
			</div>
		</section>
	)
}

export default Team
