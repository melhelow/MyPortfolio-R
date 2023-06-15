import React from 'react';

function Work() {

    const myProjects = [
        {
            title: "Plant Pedia",
            image: "https://avatars.githubusercontent.com/u/132026629?s=200&v=4",
            discreption: "Plant Pedia is a web application that allows users to search for plants and get information about them. The user can also save plants to their favorites list and view them later. The user can also view the weather in their area and get a list of plants that are best suited for the current weather conditions.",
            url: "https://plantpedia.herokuapp.com/"
        },
        {
            title: "Kidding Kittys",
            image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64936663/1/?bust=1686450238&width=300",
            discreption: "Kidding Kittys is a web application that allows users to search for cats and get information about them. The user can also save cats to their favorites list and view them later. The user can also view the weather in their area and get a list of cats that are best suited for the current weather conditions.",
            url: "https://chi-town-coders.github.io/kidding-kitties/"
        },
        {
            title: "Password Generator",
            image: "https://github.com/melhelow/03-hw/raw/main/assets/screenshot/deployed%202023-02-11%20164042.png",
            discreption: "an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes",
            url: "https://melhelow.github.io/03-hw/"
        },
        {
            title: "time-quiz",
            image: "https://github.com/melhelow/time-quiz/raw/main/assets/Screenshot%202023-02-21%20223647.png",
            discreption: "timed coding quiz with multiple-choice questions. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean, polished, and responsive user interface. ",
            url: "https://melhelow.github.io/time-quiz/"
        },
        {
            title: "work-day-scheduler",
            image: "https://github.com/melhelow/work-day-scheduler/raw/main/Develop/Screenshot%202023-02-25%20160852.png",
            discreption: "a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.",
            url: "https://melhelow.github.io/work-day-scheduler/"
        },
        {
            title: "weather-dashboard",
            image: "https://github.com/melhelow/weather-dashboard/raw/main/develop/deployed-weather%20dashboard.png",
            discreption: "Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.",
            url: "https://melhelow.github.io/weather-dashboard/"
        },

    ]

    return (
        <div className="container flex    ">
            <div className="m-5  border-r-2 border-black p-5  px-20  ">
                <h1>Work</h1>
            </div>
          
            <div className="m-5 px-20  ">
                
               {
                myProjects.map(project => {
                    return (
                        <div className='flex flex-row items-stretch'>
                            <div className='flex flex-col  '>
                        <h1>{project.title}</h1>
                        
                        <a href ={project.url} target = "_blank">
                        <div
                        className=' flex flex-row h-60 w-60 m-5  bg-cover bg-center shadow-2xl shadow-emerald-950   '
                        
                            style={{
                                backgroundImage: `url(${project.image}) `,
                            }}
                            
                        >
                               
                                </div>
                                </a>
                        </div>
                                <div className='m-5 flex items-center  '>
                            
                            <p>{project.discreption}</p>
                            </div>
                        </div>

                      
                   
                    )
                })
               }
            </div>
        </div>
    );
}

export default Work;