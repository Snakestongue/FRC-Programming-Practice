import frcImg from "./FRC.png";
import { Link } from "react-router-dom";
import { useState } from "react";
function Sug() {
  const [currentSug, setSug] = useState("")
  const handleSubmit = async()=>{
    try {
      const res = await fetch("https://frc-programming-practice.onrender.com/suggest", {
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify({suggestReq: currentSug}),
      });
      const data = await res.json();
      alert("Suggestion submitted!");
      setSug(""); 
    } catch (error) {
      alert("Error!" +error);
      console.log(error)
    }
  };

  return (
    <div id="main">
      <header>
        <img src={frcImg} id="imgHead" />
        <ul id="headerList">
          <li><Link to="/" className="headerLinks">Programming Practice</Link></li>
          <li><Link to="/debug" className="headerLinks">Debugging Practice</Link></li>
        </ul>
      </header>

      <div id="sugDiv">
        <label id="sugLab">
          If you have any suggestions, find any errors or have any ideas on how to make
          this website better please add them below. I will read all of them!
        </label>

        <textarea
          id="sugInput"
          value={currentSug}
          onChange={(e) => setSug(e.target.value)}
        />

        <button id="sugSubmit" onClick={handleSubmit}>
          Submit
        </button>
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
  );
}

export default Sug;