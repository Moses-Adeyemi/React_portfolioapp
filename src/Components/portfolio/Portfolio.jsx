import React from "react";
import "./portfolio.css";
import IMG1 from '../../assets/port1.png'
import IMG2 from '../../assets/port2.jpg'
import IMG3 from '../../assets/port3.jpg'


//ARAY//
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Signin Page',
    github: 'https://github.com',
    demo:  'https://dribbble.com',
  },

  {
    id: 2,
    image: IMG2,
    title: 'Mobile App Prototype ',
    github: 'https://github.com',
    demo:  'https://dribbble.com',
  },

  {
    id: 3,
    image: IMG1,
    title: 'crypto currency Dashboard ',
    github: 'https://github.com',
    demo:  'https://dribbble.com/shots/Mentorship-App',
  },

  {
    id: 4,
    image: IMG2,
    title: 'crypto currency Dashboard ',
    github: 'https://github.com',
    demo:  'https://dribbble.com',
  },

  {
    id: 5,
    image: IMG3,
    title: 'crypto currency Dashboard ',
    github: 'https://github.com',
    demo:  'https://dribbble.com',
  },

  {
    id: 6,
    image: IMG1,
    title: 'crypto currency Dashboard ',
    github: 'https://github.com',
    demo:  'https://dribbble.com',
  },
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       
{
  data.map(({id, image, title, github, demo})  =>{
  return(
    <article key={id}  className="portfolio__item">
    <div className="portfolio__item-image">
      <img src={image} alt={title} />
    </div>
    <h3>{title}</h3>
    <div className='portfolio__item-cta'>
      <a
        href={github}
        className="btn"
        target="_blank" rel="noreferrer"
      >
        Github
      </a>
      <a
        href={demo}
        className="btn btn-primary"
        target="_blank" rel="noreferrer"
       
      >
        Live Demo
      </a>
    </div>
  </article>
  )
})
}
      </div>
    </section>
  )
}

export default Portfolio;
