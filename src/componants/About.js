import React from 'react';

function About() {
    return (
        <div className="container flex flex-row justify-center">
            <div className="m-5 border-r-2 border-black p-5">
                <h1>About Me</h1>
            </div>
            <div className="m-5  decoration-double text-justify text-sky-500 text-lg text-center w-1/2 pt-2">
                <p>Full stack web developer with a background in Business & Economics. Trained at Northwestern coding boot camp and earned a certificate in full-stack web development. Innovative problem-solver passionate about developing apps; focused on mobile-first design and development. Strengths in creativity, teamwork, and building projects from ideation to execution.</p>
            </div>
            <div className="m-5 border-r-2 border-black p-5">
                <h1>My skills</h1>
            </div>
            <div className="m-5  decoration-double text-justify text-sky-500 text-lg text-center w-1/2 pt-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam malesuada magna at placerat. Vestibulum sed magna vitae dui scelerisque aliquet. Praesent id sapien aliquet, dignissim mi gravida, interdum ante. Proin rhoncus nunc sit amet odio luctus dictum. Donec volutpat tincidunt placerat. Aliquam venenatis faucibus porta. Maecenas ullamcorper neque sed finibus ornare. Praesent maximus augue sed massa pretium, in lacinia tellus cursus..</p>
            </div>
            
        </div>
    );
}

export default About;