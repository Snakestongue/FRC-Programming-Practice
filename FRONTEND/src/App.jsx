import frcImg from "./IMG/FRC.png";
import {Link } from "react-router-dom"
import {useState }from 'react';
import Editor from '@monaco-editor/react';
import problems from './JSON/problems.json';
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
      <div id="mainApp">
        <p id="questionProgram"> {selectedProblem.description} </p>
        <div id="divEditor">
          <Editor
            height="100%"
            defaultLanguage="java"
            theme="purpleTheme"
            value={userCode}
            onChange={(value)=>setUserCode(value)} 
            id="editor"
            onMount={(editor, monaco) => {
              monaco.editor.defineTheme("purpleTheme", {
                base: "vs-dark",
                inherit: true,
                rules: [
                  { token: "keyword", foreground: "a855f7" },
                  { token: "number", foreground: "f59e0b" },
                  { token: "string", foreground: "facc15" },
                  { token: "comment", foreground: "6b7280" }
                ],
                colors: {
                  "editor.background": "#0f0f0f",
                  "editor.foreground": "#ffffff",
                  "editorCursor.foreground": "#a855f7",
                  "editor.lineHighlightBackground": "#161616",
                  "editor.selectionBackground": "#a855f733",
                  "editorLineNumber.foreground": "#4b5563"
                }
              });

              monaco.editor.setTheme("purpleTheme");
            }}
            />
        </div>
        <div id="buttonDiv">
            {problems.slice(0, 3).map((p)=>(
            <button
              key={p.id}onClick={()=>handleProblemChange({target:{value:  p.id}})}>
              {p.title}
            </button> 
            ))}
          <button id="submit" onClick={handleSubmit}>Submit</button>
        </div>
        <div id="feedHolder">
          {feedback && <p id="feedback">{feedback}</p>}
        </div>
      </div>
      <footer>
        <div id="newFooterDiv">
          <Link id="PPLINK" to="/PP" className="footerLinks" >Privacy Policy</Link>
          <Link id="Sug" to="/Sug" className="footerLinks" >Add a suggestion</Link>
          <a id="git" className="footerLinks" href="https://github.com/Snakestongue/FRC-Programming-Practice">Github</a>
        </div>
        <p style={{color:"white"}} id="copy">© By Snakestongue. All rights reserved.</p>
      </footer>
    </div>
    
  );
}
export default App;