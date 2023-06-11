import React from 'react';

function Work(props) {

    const myProjects = [
        {
            title: "Plant Pedia",
            image: '/images/plant-pedia.png',
        },
        {
            title: "sample",
            image: "https://placehold.co/600x400"
        },
        {
            title: "sample",
            image: "https://placehold.co/600x400"
        },
        {
            title: "sample",
            image: "https://placehold.co/600x400"
        }
    ]

    return (
        <div className="container flex flex-row justify-center">
            <div className="m-5 border-r-2 border-black p-5">
                <h1>Work</h1>
            </div>
            <div className="m-5">
               {
                myProjects.map(project => {
                    return (
                        <div
                        className='h-48 w-48 m-5'
                            style={{
                                backgroundImage: `url(${project.image})`,
                            }}
                        >
                            <h1>{project.title}</h1>

                        </div>
                    )
                })
               }
            </div>
        </div>
    );
}

export default Work;