
import AboutMe from './aboutMe'
import Services from './services'
import TechnologiesAndTool from './tools'
import MyCertificates from './certificate'
import Projects from './projects'
export default function Main(){
return(
    <div className='Main'>
        <AboutMe></AboutMe>
        <Services></Services>
        <TechnologiesAndTool></TechnologiesAndTool>
        <MyCertificates></MyCertificates>
        <Projects></Projects>
    </div>
)
}