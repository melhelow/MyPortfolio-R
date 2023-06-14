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
            url: "https://kidding-kittys.herokuapp.com/"
        },

    ]

    return (
        <div className="container flex    ">
            <div className="m-5  border-r-2 border-black p-5   ">
                <h1>Work</h1>
            </div>
          
            <div className="m-5 ">
                
               {
                myProjects.map(project => {
                    return (
                        <div className='flex flex-row'>
                            <div className='flex flex-col  '>
                        <h1>{project.title}</h1>
                        
                        <a href ={project.url} target = "_blank">
                        <div
                        className=' flex flex-row h-96 w-96 m-5  bg-cover bg-center shadow-2xl shadow-emerald-950   '
                        
                            style={{
                                backgroundImage: `url(${project.image}) `,
                            }}
                            
                        >
                               
                                </div>
                                </a>
                        </div>
                                <div className='m-5 flex items-center '>
                            
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