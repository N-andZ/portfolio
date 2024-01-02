import React from 'react';

function TechnologyAttributes ({name}:{name?:string}){
    return(
        <div id="tech-card" className=' text-black default-text-roboto-smaller bg-white px-5 py-2 rounded-full'>
           {name}
        </div>
    );
}


const ProjectCard = (

{
 sTitle,
 sDescription,
 arrTech,
 sLink,
 sImg,

    
}
:
{
 sTitle?: string;
 sDescription?: string;
 arrTech?: any;
 sLink?: string;
 sImg?: string;

}

)=>{


    return(
        
        <a
        href={sLink}
        target={'_blank'}
        >
            <div className="flex flex-row gap-10">
                    <div>  
                        <img 
                            style={{objectFit:"cover"}}
                            width = {"250px"}
                            height = {"195px"}
                            src={sImg}/>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="default-text-roboto-small text-bold">{sTitle}</div>
                        <div style={{flexGrow: "1"}} className="default-text-roboto-smaller">{sDescription}</div>
                         <div className="flex flex-row flex-wrap gap-4">
                            {arrTech.map((tech: any)=>(
                                <TechnologyAttributes
                                key={tech}
                                name={tech}
                                />
                            ))}
                         </div>

                    </div>
                </div> 
        </a>
    )


}




export default ProjectCard;