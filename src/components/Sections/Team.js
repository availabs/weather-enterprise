import React from 'react'

export const Team = () => {
	var people = [
		{
			name: "Mitchell KAPPOS",
			about: "To portal for some of the world's most high-value net.",
			pic: 'img/team/01.jpg',
			job: "( Graphic Designer )"
		},
		{
			name: "Leonardo da Vinci",
			about: "To portal for some of the world's most high-value net.",
			pic: 'img/team/02.jpg',
			job: "( Front-End Dev )"
		},
		{
			name: "Mitchell KAPPOS",
			about: "To portal for some of the world's most high-value net.",
			pic: 'img/team/01.jpg',
			job: "( Graphic Designer )"
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
							  <p>{person.about}</p>
							  <ul className='social'>
								<li><a href='https://www.facebook.com/' target='_blank'><i className='fa fa-facebook' /></a></li>
								<li><a href='https://www.twitter.com/' target='_blank'><i className='fa fa-twitter' /></a></li>
								<li><a href='https://www.dribbble.com/' target='_blank'><i className='fa fa-dribbble' /></a></li>
								<li><a href='https://www.pinterest.com/' target='_blank'><i className='fa fa-pinterest' /></a></li>
								<li><a href='https://www.behance.net/' target='_blank'><i className='fa fa-behance' /></a></li>
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
		<section id='team-people' className='section-padding text-center'>
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
