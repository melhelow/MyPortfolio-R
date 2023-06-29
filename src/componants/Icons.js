import React from 'react';


function Icons() {
    const myIcons = [
        {
            // title: "github",
            icon: "fa-brands fa-github",
            url: "https://github.com/melhelow"
          },
          {
            // title: "linkedin",
            icon: "fa-brands fa-linkedin-in",
            url: "https://www.linkedin.com/in/mohamed-elhelw-76a888271/"
          },
          {
            // title: "email",
            icon: "fa-solid fa-at",
            url: "mailto:melhelow@hotmail.com"
          },
          {
            // title: "phone",
            icon: "fa-sharp fa-solid fa-phone",
            cell: "+1-708-580-9783"
          },
    ]


    return (
        <div>
             <div className='flex flex-1 min-h-0 items-center justify-center sm:items-stretch sm:justify-center  border-indigo-600 '>
                {myIcons.map((icons) => {
                    return (
                        <div className="flex flex-row ">
                            <div className="flex ">
                                <h1>{icons.title}</h1>

                                <div
                                  className=" flex flex-row  h-25 w-25 m-5  bg-cover bg-center  justify-end items-end "
                                >
                                    <a href = {icons.url} target="_blank"><i 
                                        className={icons.icon} 
                                        style={{
                                            fontSize: "15px"
                                        }}    
                                    ></i>
                                    </a>

                                </div>
                            </div>
                        </div>
                    );
                })}
                </div>
        </div>
    );
}

export default Icons;