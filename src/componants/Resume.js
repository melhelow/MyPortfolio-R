import React from 'react';
import myResume from '../pdf/software-engineer.pdf'

function Resume() {
 
        return (
            
            <div className="container flex  ">
                <div className="m-5  border-r-2 border-black p-5     ">
                    <h1>Resume</h1>
                </div>
                    <div className="m-5 w-full  ">
                   
                                        
                                           
                 <iframe src= {myResume} width="120%" height="600"/>
                                            
                                     

                                        
                    
                
            </div>
        </div>
        );
}

export default Resume;