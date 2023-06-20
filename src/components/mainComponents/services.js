import img1 from '../../images/undraw_web_development_0l6v.svg';
import img2 from '../../images/undraw_flutter_dev_wvqj.svg';
import img3 from '../../images/undraw_programmer_re_owql.svg';

export default function Services(){
    return(
        <div className="Services-container">
           <div className="service-Title"><h2>My Services</h2></div>
           <div className="cards-container">
                <div className="card" id="web-dev">
                    <div className="image"><img width="80%" src={img1} alt="Web Developement"/></div>
                    <h3>Web developement</h3>
                    <p>
                        I have the ability of creating a simple 
                        responsive website using <span>html,css,js,
                            react</span>: frontend
                        <span> Nodejs, Express</span>: backend.
                    </p>
                </div>

                <div className="card" id="mobile-dev">
                    <div className="image" ><img width="80%" src={img2} alt="mobile developement"/></div>
                    <h3>Mobile developement</h3>
                    <p>I have the ability of creating a simple
                        mobile application using<span> dart.</span>
                    </p>
                </div>

                <div className="card" id="desktop-dev">
                    <div className="image"><img width="75%" src={img3} alt="desktop Develepement"/></div>
                    <h3>Desktop developement</h3>
                    <p>I have the ability of creating a simple
                        desktop application using<span> c#</span>
                    </p>
                </div>
            </div>
        </div>
    )
}