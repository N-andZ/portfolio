/** Social Media Icon Component
 * variables written in Hungarian Notation
 * Simply call this component where you need it and specifcy the link, social media type, and add any tailwind styles to className
 * 
 */



import { Facebook, Github, Linkedin } from "lucide-react"
const SocialMediaIcons = (
    {sSocialType, anySocialLink, className}:{sSocialType?: string, anySocialLink?: any, className: string}
) => {
    
    var socialImage = <></>;
    switch (sSocialType?.toLocaleLowerCase()){
        case "linkedin":
            socialImage = <Linkedin className="min-h-full min-w-full "/>
            break;
        case "facebook":
            socialImage = <Facebook className="min-h-full min-w-full " />
            break;
        case "github":
            socialImage = <Github className="min-h-full min-w-full" />
            break;
    }



    return (
        <a href={anySocialLink} ><div className={`${className}`}>{socialImage}</div></a>
    )

}

export default SocialMediaIcons;