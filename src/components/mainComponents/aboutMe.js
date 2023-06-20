import img from '../../images/undraw_personal_information_re_vw8a (1).svg';

export default function AboutMe(){
    return (
        <div className="About-me-container">
            <div className="card">
                <h2>About Me</h2>
                <p>
                    I'm Meriem Boussaid, a computer science student 
                    in the first year .
                    I have the  ability of creating a web application, mobile 
                    application and desktop application,
                    i'm passion about learning new technologies and tools. 
                </p>
            </div>
            <div className="image"><img width="85%" src={img} alt="aboutMeImage"/></div>
        </div>
    )

}