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
                <p>Full-stack software developer with hands-on experience building production-ready applications using JavaScript, React.js, Node.js, and SQL databases. Completed Northwestern University coding bootcamp and Discovery Partners Institute’s Talent Accelerator Program. Experienced in the full Software Development Life Cycle (SDLC), Object-Oriented Programming (OOP), and Git version control. Career-changer bringing 12+ years of business operations leadership with proven troubleshooting, cross-functional team management, and regulatory compliance experience. Eager to apply strong JavaScript foundation and systematic problem-solving..</p>
                    
                     
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