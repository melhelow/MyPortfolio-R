import React from 'react';
import avatar from '../images/me 3.jpg'
function About() {
    return (
        <div className="container flex flex-row  font-normal   ">
            <div className="m-5 border-r-2 border-black p-5 px-20  ">
                <h1>About Me</h1>
            </div>
            <div className="m-5  flex flex-row decoration-double text-justify  text-lg text-center w-1/2 pt-2 ">
                <p>Full stack web developer with a background in Business & Economics. Trained at Northwestern coding boot camp and earned a certificate in full-stack web development. Innovative problem-solver passionate about developing apps; focused on mobile-first design and development. Strengths in creativity, teamwork, and building projects from ideation to execution.</p>
                
                     
            </div>
            <div className='flex justify-center  p-8 '>
                   <img
                        className=" h-48 w-48 rounded-full"
                        src={avatar}
                        alt=""
                      />  
            </div>
            
            
        </div>
    );
}

export default About;