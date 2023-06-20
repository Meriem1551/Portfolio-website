import icon from '../../icons/icons8-github.svg';

export default function Projects(){
 return(
    <div className="projects-container">
        <h2>Projects</h2>
        <div>
            <a href="https://github.com/" target="blank">Click here</a>
            <img id="github"src={icon} alt="github-icon" width="30px"/>
        </div>

    </div>
 )
}