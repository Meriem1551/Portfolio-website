import img1 from '../../images/Introduction to C_certificate (3).jpg';
import img2 from '../../images/Introduction to HTML_certificate.jpg';
import img3 from '../../images/Introduction to CSS_certificate.jpg';
import img4 from '../../images/Introduction to JavaScript_certificate.jpg';

export default function MyCertificates(){
    return(
        <div className="certificate-container">
            <h2>my certificates</h2>
            <div className="certificate-list">
               <ul>
                 <li><img src={img1} width="100%" height="100%" alt="c-cert"/></li>
                 <li><img src={img2} width="100%" height="100%" alt="html-cert"/></li>
                 <li><img src={img3} width="100%" height="100%" alt="css-cert"/></li>
                 <li><img src={img4} width="100%" height="100%" alt="js-cert"/></li>
               </ul>
            </div>
        </div>
    )
}