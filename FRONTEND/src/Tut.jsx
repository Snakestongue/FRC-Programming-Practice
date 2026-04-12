import {Link} from "react-router-dom"
import frcImg from "./FRC.png"
function Tut(){
    return (
        <div id="TutMain">
        <header>
            <img src={frcImg} id="imgHead" />
            <ul id="headerList">
                <li><Link to="/" className="headerLinks">Programming Practice</Link></li>
                <li><Link to="/debug" className="headerLinks">Debugging Practice</Link></li>
                <li><Link to="/tut" className="headerLinks">Tutorials</Link></li>
            </ul>
        </header>
      
      <nav>
        <ul id="newHeaderList">
          <li><Link to="/" className="headerLinks">Programming Practice</Link></li>
          <li><Link to="/debug" className="headerLinks">Debugging Practice</Link></li>
          <li><Link to="/tut" className="headerLinks">Tutorials</Link></li>
        </ul>
      </nav>
            <div id="ATC">
                <div id="javaStart" className="tutCard">
                    <h3><strong>Basics of Java</strong></h3>
                    <h4>Variables</h4>
                    <ul>
                        <li><strong>Integer:</strong> A whole number: 1, 2, 3</li>
                        <li><strong>Double:</strong> A decimal Value: 3.1415, 1.2345, 5.4</li>
                        <li><strong>Boolean:</strong> True of False: true, false</li>
                        <li><strong>String:</strong> A piece of text: "abc"</li>
                        <li><strong>Char:</strong> A single character: 'a'</li>
                    </ul>
                    <h4>Declare and Initalize a Variable</h4>
                    <ul>
                        <li><strong>Integer:</strong> int x = 5;</li>
                        <li><strong>Double:</strong> double y = 5.5;</li>
                        <li><strong>Boolean:</strong> boolean z = true;</li>
                        <li><strong>String:</strong> String a = "abc";</li>
                        <li><strong>Char:</strong> char b = 'a';</li>
                    </ul>
                    <h4>Maths</h4>
                    <ul>
                        <li><strong>Addition:</strong> Use +</li>
                        <li><strong>Subtraction:</strong> Use -</li>
                        <li><strong>Multiplication:</strong> Use *</li>
                        <li><strong>Division:</strong> Use /</li>
                        <li><strong>Modulus:</strong> Use %</li>
                        <li><strong>Increment:</strong> Use ++</li>
                        <li><strong>Decrement:</strong> Use --</li>
                        <li><strong>Add/Equal:</strong> Use +=</li>
                        <li><strong>Subtract/Equal:</strong> Use -=</li>
                        <li><strong>Multiplication/Equal:</strong> Use *=</li>
                        <li><strong>Division/Equal:</strong> Use /=</li>
                    </ul>
                    <h4>Comparison Operators</h4>
                    <ul>
                        <li><strong>Equal to:</strong> Use ==</li>
                        <li><strong>Not Equal to:</strong> Use !=</li>
                        <li><strong>Greater than:</strong> Use &gt;</li>
                        <li><strong>Less than:</strong> Use &lt;</li>
                        <li><strong>Greater than or Equal to:</strong> Use &gt;=</li>
                        <li><strong>Less than or Equal to:</strong> Use &lt;=</li>
                    </ul>
                    <h4>Comparison Operators</h4>
                    <ul>
                        <li><strong>And:</strong> Use &&</li>
                        <li><strong>Or:</strong> Use ||</li>
                        <li><strong>Not:</strong> Use !</li>
                    </ul>
                    <h4>If Statements</h4>
                    <ul>
                        <li><strong>If</strong></li>
                        <ul>
                            <li className="codeIndent">
                                <pre>
                                    <code>
{`if (x &gt y) {
    return 1;
}`}
                                    </code>
                                </pre>
                            </li>
                        </ul> 
                        <li><strong>If-Else</strong></li>
                                                <ul>
                            <li className="codeIndent">
                                <pre>
                                    <code>
{`if (x &gt y) {
    return 1;
} else {
    return 2;
}`}
                                    </code>
                                </pre>
                            </li>
                        </ul>
                        <li><strong>If-Else If-Else</strong></li>
                        <ul>
                            <li className="codeIndent">
                                <pre>
                                    <code>
{`if (x &gt y) {
    return 1;
} else if (x == y) {
    return 2;
} else {
    return 3;
}`}
                                    </code>
                                </pre>
                            </li>
                        </ul>
                    </ul>
                </div>
                {/* <div id="javaAdvance" className="tutCard">
                    <h3><strong>Advanced Java</strong></h3>
                    <ul></ul>
                </div>
                <div id="canSpark" className="tutCard">
                    <h3><strong>Using SparkMax</strong></h3>
                    <ul></ul>
                </div>
                <div id="talonFX" className="tutCard">
                    <h3><strong>Using TalonFX</strong></h3>
                    <ul></ul>
                </div> */}
            </div>
            <footer>
                <div id="links">
                <Link id="PPLINK" to="/PP" className="footerLinks" >Privacy Policy</Link>
                <Link id="Sug" to="/Sug" className="footerLinks" >Add a suggestion</Link>
                <a id="git" className="footerLinks" href="https://github.com/Snakestongue/FRC-Programming-Practice">Github</a>
                </div>
                <p style={{color:"white"}} id="copy">© By Snakestongue. All rights reserved.</p>
            </footer>
        </div>
    )
}
export default Tut;