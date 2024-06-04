import React, { useState } from "react";
import "./experience.css";
import { HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineCalendar } from "react-icons/hi";

const Experience = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
  
    return (
        <section className="qualification section " id="experience" >
            <br/>
      <br/>
     
            <h2 className="section__title">Experience / Roles and Responsibilities </h2>
            <span className="section__subtitle"> 4 month <b>Industrial Experience</b> <p>3 year Student club Experience</p> </span>
           

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div 
                        className={toggleState === 1 ? "qualification__button button--flex qualification__active" 
                        : "qualification__button button--flex"} 
                        onClick={() => toggleTab(1)}
                    >
                        <HiOutlineAcademicCap className="qualification__icon" />
                        Experience
                    </div>
                    <div 
                        className={toggleState === 2 ? "qualification__button button--flex qualification__active" 
                        : "qualification__button button--flex"} 
                        onClick={() => toggleTab(2)}
                    >
                        <HiOutlineBriefcase className="qualification__icon" />
                        Roles & Responsibilities
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active"
                        : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Project Intern</h3>
                                <span className="qualification__subtitle"><b>Intel Corporation</b><p> Running Generative AI on Intel AI to achieve efficient Focusing on enhancing these LLM models with fine-tuning, leveraging Intel® OpenVINO™ to optimize performance.</p></span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    May'24-July'24
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            
                           
                        </div>
                        <div className="qualification__data">
                          
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Data Science Intern</h3>
                                <span className="qualification__subtitle"><b>RTWO HealthCare</b><p>Utilized data analytics techniques to extract meaningful patterns and trends from the collected data, facilitating
                                informed decision-making within the organization.</p></span>
                                
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    December'23 - January'24
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={toggleState === 2 ? "qualification__content qualification__content-active"
                        : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">President</h3>
                                <span className="qualification__subtitle"><b>The Data Alchemists</b><p>Official Data Science Club of MIT, Manipal. Currently serving as President, overseeing all club activities and initiatives aimed at promoting data science education
                                and exploration within the MIT Manipal community.</p>
                                </span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    August'23-July'24
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            
                           
                        </div>
                        <div className="qualification__data">
                          
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Literary and Debating Head</h3>
                                <span className="qualification__subtitle"><b>Goonj</b><p>Official hindi literary club of MIT Manipal.Overseeing the operations and activities of Goonj, Spearheaded the planning and execution of major events such as Durga Puja and Dandiya Night</p></span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    August'23-July'24
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Core Committee</h3>
                                <span className="qualification__subtitle"><b>Anubhuti, Revels’24</b><p>Official Cultural fest of MIT manipal</p>
                                </span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    February'24-March'24
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            
                           
                        </div>
                        <div className="qualification__data">
                          
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Core Committee Member</h3>
                                <span className="qualification__subtitle"><b>MIT-GPT, Techtatva’23</b><p>Official Technical fest of MIT manipal</p></span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    August'23-Oct'23
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    );
}

export default Experience;
