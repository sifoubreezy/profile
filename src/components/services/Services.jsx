import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id="services">
        <h5>Wat I Offer</h5>
        <h2>Services</h2>
        <div className="container services_container">
            <article className="services">
                <div className="services_head">
                    <h3>UI/UX Design</h3>
                </div>
                <ul className="services_list">
                    <li>
                        <BiCheck className="services_list-icon"/>
                        <p>Custom-tailored design.</p>
                    </li>
                    <li>
                        <BiCheck className="services_list-icon"/>
                        <p>Creative Solution.</p>
                    </li>
                    <li>
                        <BiCheck className="services_list-icon"/>
                        <p>Quality over quantit.</p>
                    </li>
                    <li>
                        <BiCheck className="services_list-icon"/>
                        <p>Streamlined process.</p>
                    </li>
                    <li>
                        <BiCheck className="services_list-icon"/>
                        <p>Transparent collaboration.</p>
                    </li>
                    <li>
                        <BiCheck className="services_list-icon"/>
                        <p>Modern visual Ui Ux design of mobile app or website.</p>
                    </li>
                    <li>
                        <BiCheck className="services_list-icon"/>
                        <p>delivering a great, end-to-end user experience for all customers.</p>
                    </li>
                    
                </ul>
            </article>
            <article className="services">
                <div className="services_head">
                    <h3>Web Development</h3>
                </div>
                <ul className="services_list">
                    <li>
                        <BiCheck className="services_list-icon"/>
                        <p>Rapid prototyping, fast MVP delivery.</p>
                    </li>
                    <li>
                        <BiCheck className="services_list-icon"/>
                        <p>Iterative development with major releases.</p>
                    </li>
                    <li>
                        <BiCheck className="services_list-icon"/>
                        <p>Carefully analyzed requirements.</p>
                    </li>
                    <li>
                        <BiCheck className="services_list-icon"/>
                        <p>Stand-out, easy-to-navigate UI & UX design.</p>
                    </li>
                    <li>
                        <BiCheck className="services_list-icon"/>
                        <p>Secure and scalable solution that works fast.</p>
                    </li>
                    <li>
                        <BiCheck className="services_list-icon"/>
                        <p>Focus on quality at every stage of the software development life cycle.</p>
                    </li>
                </ul>
            </article>
            <article className="services">
                <div className="services_head">
                    <h3>Machin Learning</h3>
                </div>
                <ul className="services_list">
                    <li>
                        <BiCheck className="services_list-icon"/>
                        <p>Predictive and real-time analysis.</p>
                    </li>
                    <li>
                        <BiCheck className="services_list-icon"/>
                        <p>Machin learning consulting.</p>
                    </li>
                    <li>
                        <BiCheck className="services_list-icon"/>
                        <p>Finding patterns and revealing insights in large volumes of composite data.</p>
                    </li>
                    <li>
                        <BiCheck className="services_list-icon"/>
                        <p>Solutions for Analytics, Data Management, and simulation for automated Decision Making.</p>
                    </li>
                   
                </ul>
            </article>
        </div>
    </section>
  )
}

export default Services