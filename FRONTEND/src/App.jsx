import frcImg from "./FRC.png";
import {Link } from "react-router-dom"
import {useState }from 'react';
import Editor from '@monaco-editor/react';
import problems from './problems.json';
function App(){
  const[selectedProblem, setSelectedProblem]=useState(problems[0]);
  const[userCode, setUserCode]= useState(selectedProblem.starterCode);
  const [feedback, setFeedback]= useState('');
  const handleSubmit=()=>{
    if(userCode.trim().toLowerCase()== selectedProblem.solutionCode.trim().toLowerCase()){
      setFeedback('Correct!');
    }else if(selectedProblem.id==problems[0].id){
      if ((userCode.match(/public/gi) || []).length < 2){
        setFeedback("Did you add public?")
      }else if (!userCode.trim().toLowerCase().includes("static")){
        setFeedback("Did you add static?")
      }else if (!userCode.trim().toLowerCase().includes("double")){
          setFeedback("Did you add double?")
      }else if (!userCode.trim().toLowerCase().includes("0.8")){
          setFeedback("Did you add 0.8?")
      }else{
        setFeedback("Try again")
      }
    }else if(selectedProblem.id==problems[1].id){
      if (!userCode.trim().toLowerCase().includes("private")){
        setFeedback("Did you add private?")
      }else if (!userCode.trim().toLowerCase().includes("final")){
        setFeedback("Did you add final?")
      }else if ((userCode.match(/talonfx/gi) || []).length < 2){
          setFeedback("Did you add TalonFX twice?")
      }else if (!userCode.trim().toLowerCase().includes("intakemotor")){
          setFeedback("Did you name it intakeMotor")
      }else if (!userCode.trim().toLowerCase().includes("(3)")){
          setFeedback("Did you set the speed to (3)")
      }else{
        setFeedback("Try again")
      }
    } else if(selectedProblem.id==problems[2].id){
      if ((userCode.match(/public/gi) || []).length < 2){
        setFeedback("Did you add public?")
      }else if (!userCode.trim().toLowerCase().includes("static")){
        setFeedback("Did you add static?")
      }else if (!userCode.trim().toLowerCase().includes("void")){
          setFeedback("Did you add void?")
      }else if (!userCode.trim().toLowerCase().includes("stopmotor")){
          setFeedback("Did you use stopmotor?")
      }else if (!userCode.trim().toLowerCase().includes("stopintakemotor")){
          setFeedback("Did you name the method stopintakemotor?")
      }else{
        setFeedback("Try again")
      }
    } 
  
  }
  const handleProblemChange=(e)=>{
    const problem =problems.find(p =>p.id==parseInt(e.target.value));
    setSelectedProblem(problem);
    setUserCode(problem.starterCode);
    setFeedback('');
  };
  return (
    <div id="mainDiv" >
      <header>
        <img src={frcImg} id="imgHead"/>
        {/* <h1 id="FRCPPTitle">FRC Programming Practice</h1> */}

        {/* <select>
          <option>M.C</option>
          <option>Coding</option>
        </select> */}
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
      <div style={{marginTop: "55px"}}>
      <p id="questionProgram"> {selectedProblem.description} </p>
      <div style ={{
        height:'50vh',
        maxWidth:"900px",
        margin:"0 auto"
        }}>
        <Editor
          height="100%"
          defaultLanguage="java"
          theme="vs-dark"
          value={userCode}
          onChange={(value)=>setUserCode(value)} 
          id="editor"
        />
      </div>
      <div id="buttonDiv">
        <div> 
          {problems.slice(0, 3).map((p)=>(
          <button
            key={p.id}onClick={()=>handleProblemChange({target:{value:  p.id}})}>
            {p.title}
          </button> 
          ))}
        </div>
        <button id="submit" onClick={handleSubmit}>Submit</button>
      </div>
      <div id="feedHolder">
        {feedback && <p id="feedback">{feedback}</p>}
      </div>
      </div>
      <footer>
        <div id="links">
          <Link id="PPLINK" to="/PP" className="footerLinks" >Privacy Policy</Link>
          <a id="git" className="footerLinks" href="https://github.com/Snakestongue/FRC-Programming-Practice">Github</a>
        </div>
        <p style={{color:"white"}} id="copy">© By Snakestongue. All rights reserved.</p>
      </footer>
    </div>
    
  );
}
export default App;