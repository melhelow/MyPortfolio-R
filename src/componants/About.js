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
                <p>Experienced Full Stack Web Developer, passionate about injecting creativity into code. Proficient in
MERN stack technologies, including JavaScript, Express, Node, HTML, and CSS. My expertise lies in
crafting distinctive user experiences and creatively solving challenges in both front-end and back-end
development. Adept in client communication, both written and verbal, with a knack for nurturing
long-term relationships. Experienced in deploying projects to Heroku and proficient in GitHub for version
control.</p>
                    
                     
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