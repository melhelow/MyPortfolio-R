import React from 'react';
import avatar from '../images/me 3.jpg'
function About() {
    return (
        <div className="container flex flex-row  font-normal   ">
            <div></div>
            <div className="m-5 border-r-2 border-black p-5 px-20  ">
                <h1>About Me</h1>
            </div>
            
            
            <div className="m-5  flex flex-row decoration-double text-justify  text-lg text-center w-1/2 pt-2 ">
                <p>Experienced Full Stack Web Developer with expertise in MERN stack technologies, including JavaScript, Node.js, Express, React.js, and MongoDB. Proficient in creating dynamic user experiences and addressing complex challenges in both front-end and back-end development. Skilled in deploying projects to Heroku, leveraging GitHub for version control, and effectively communicating with clients to build and maintain strong relationships. Additionally experienced in Ruby on Rails, MySQL, and modern frameworks like Bootstrap and Tailwind, showcasing a versatile and adaptive skill set.</p>
                    
                     
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