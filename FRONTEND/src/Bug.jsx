import {useState} from 'react'
import problems from './debugProblems.json'
import {Link } from "react-router-dom"

function Bug(){
    const [selectedChoices, setSelectedChoices] = useState({})
  return(
    <div id="mainDivBug">
      <header>
        <h1>FRC Programming Practice</h1>
        <ul id="headerList">
          <li><Link to="/">Programming Practice</Link></li>
          <li><Link to="/debug">Debugging Practice</Link></li>
        </ul>
      </header>
      <div id="f3">
        {problems.map((p)=>{
            const choices = [p.choice1, p.choice2, p.choice3]
            const userChoice = selectedChoices[p.id]
            let feedbackText = ""
            let feedbackColor = "";
            if (userChoice){
                if (userChoice === p.CC){
                    feedbackText = "Correct!"
                    feedbackColor = "green"
                }else{
                    feedbackText = `Incorrect! ${p.whyCorrect}`
                    feedbackColor = "red"
                }
            }
          return(
            <div className="bQ" key={p.id}>
              <p>{p.question}</p>
              <pre>{p.sampleCode}</pre>
              {choices.map((choice, index)=>(
                <label key={index} style={{display: "block"}}>
                  <input
                    type="radio"
                    name={`problem-${p.id}`}
                    value={choice}
                    checked={selectedChoices[p.id]== choice}
                    onChange={(r)=>setSelectedChoices({...selectedChoices, [p.id]: r.target.value,})}//this line was all AI
                  />
                  {choice}
                </label>
              ))}
                {userChoice && (
        <p style={{ color: feedbackColor }}>{feedbackText}</p>
        )}
            </div>
          )
        })}
      </div>
      <footer>
        <Link to="/PP">Privacy Policy</Link>
        <p style={{color:"white"}}>© By Snakestongue. All right reserved.</p>
      </footer>
    </div>
  );
}

export default Bug;