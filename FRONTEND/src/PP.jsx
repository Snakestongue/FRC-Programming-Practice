import frcImg from "./FRC.png";
import {Link} from "react-router-dom"
function PP(){
    return (
    <div id="PPO">
    <header>
        <img src={frcImg} id="imgHead"/>
        <ul id="headerList">
            <li><Link to="/" className="headerLinks">Programming Practice</Link></li>
            <li><Link to="/debug" className="headerLinks">Debugging Practice</Link></li>
            {/* <li><a>Tutorials</a></li> */}
        </ul>
        </header>
    <nav>
        <h3 id="navTitle">FRCPP</h3>
        <ul id="headerList">
          <li><Link to="/" className="headerLinks">Programming Practice</Link></li>
          <li><Link to="/debug" className="headerLinks">Debugging Practice</Link></li>
        </ul>
      </nav>
    <div id="PP">
        <h2>Information we collect!</h2>
        <ul>
            <li>Information We Collect:</li>
            <ul>
                <li>We collect the team number you provide when prompted. This is only used to track the number of unique users.</li>
            </ul> 
            <li>How We Use Your Information:</li>  
            <ul>
                <li>To understand user engagement and improve the app.
                    We do not share or sell your team numbers with third parties.   </li>
            </ul>  
            <li>
                Data Storage
            </li>
            <ul>
                <li>
                    Your team number is stored locally in your browser (localStorage).
                        No personal information, such as names, emails, or contact info, is collected.
                </li>
            </ul>
        </ul>
    </div>
        <footer>
        <div id="links">
          <Link id="PPLINK" to="/PP" className="footerLinks" >Privacy Policy</Link>
          <a id="git" className="footerLinks" href="https://github.com/Snakestongue/FRC-Programming-Practice">Github</a>
        </div>
        <p style={{color:"white"}}>© By Snakestongue. All rights reserved.</p>
      </footer>
    </div>
    )
}
export default PP;