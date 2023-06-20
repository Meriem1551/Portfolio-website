import icon1 from '../icons/logo-facebook.svg';	
import icon2 from '../icons/logo-instagram.svg';
import icon3 from '../icons/logo-whatsapp.svg';

export default function Footer() {
    return(
        <div className="footer">
            <div className="socialMedia-container">
                <ul>
                    <li>
                        <img src={icon1} alt="facebook" width="10%"/>
                    </li>
                    <li>
                        <img src={icon2} alt="instgram" width="10%"/>
                    </li>
                    <li>
                        <img src={icon3} alt="whatsapp" width="10%"/>
                    </li>
                </ul>
            </div>
            <p> &copy; 2023</p>
        </div>
    )
}