import React from 'react'
import './About.css'
import ME from '../../mee.JPG'
import {FaAward} from 'react-icons/fa'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import{MdOutlineArticle} from 'react-icons/md'
const about = () => {
  return (
    <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt="About Image" />
                </div>
            </div>
            <div className="about__content">
                <div className="about__cards">
                    <article className="about__card">
                        <FaAward className="about__icon"/>
                        <h5>Experience</h5>
                        <small>+3 years working</small>
                    </article>
                    <article className="about__card">
                        <AiOutlineFundProjectionScreen className="about__icon"/>
                        <h5>Project</h5>
                        <small>+12 completed</small>
                    </article>
                    <article className="about__card">
                        <MdOutlineArticle className="about__icon"/>
                        <h5>Article</h5>
                        <small>1 articel</small>
                    </article>
                </div>
                <p>Over 3 years of overall experience in computer science and application development.
                     Mastery of object-oriented concepts and extensive development experience in using these concepts in the creation of reusable code 
                     Extensive experience in creating user interfaces using HTML5, CSS3 and JavaScript  .
I have experience in the field of Artificial Intelligence and I'm working on an application for facial recognition.
 My goal is to improve the system to obtain better accuresy I have experience with Developing computer solutions integrating artificial intelligence bricks,
  Knowing how to manipulate data: extraction, collection, visualization and monitoring of data, 
  Knowing how to modulate raw data (Big Data) into usable data, Designing, developing, testing and then adapting applications integrating all or part of the technologies..
                </p>
                <a href="#contact"class="btn btn-primary">Let's Talk</a>
            </div>
        </div>
    </section>
  )
}

export default about