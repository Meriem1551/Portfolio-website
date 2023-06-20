import icon1 from '../../icons/icons8-html-48.svg';
import icon2 from '../../icons/icons8-css.svg';
import icon3 from '../../icons/icons8-js.svg';
import icon4 from '../../icons/icons8-réagir.svg';
import icon5 from '../../icons/icons8-node-js.svg';
import icon6 from '../../icons/icons8-dart.svg';
import icon7 from '../../icons/icons8-c-sharp-logo.svg';
import icon8 from '../../icons/icons8-github.svg';
import icon9 from '../../icons/icons8-git.svg';

export default function TechnologiesAndTools(){
    return(
        <div className="tools-container">
            <h2>Tools & Technologies</h2>
            <div className="tools-list">
                <ul>
                    <li><img src={icon1} width="90px" alt="html-icon"/></li>
                    <li><img src={icon2} width="90px"alt="css-icon"/></li>
                    <li><img src={icon3} width="90px"alt="js-icon"/></li>
                    <li><img src={icon4} width="90px" alt="react-icon"/></li>
                    <li><img src={icon5} width="90px" alt="nodeJs-icon"/></li>
                    <li><img src={icon6} width="90px" alt="dart-icon"/></li>
                    <li><img src={icon7} width="90px" alt="c#-icon"/></li>
                    <li><img src={icon8} width="90px"alt="github-icon"/></li>
                    <li><img src={icon9} width="90px" alt="git-icon"/></li>
                </ul>
            </div>
        </div>
    )
}
