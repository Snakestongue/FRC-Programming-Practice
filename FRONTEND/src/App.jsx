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
        <h1>FRC Programming Practice</h1>
        {/* <select>
          <option>M.C</option>
          <option>Coding</option>
        </select> */}
        <ul id="headerList">
          <li><Link to="/">Programming Practice</Link></li>
          <li><Link to="/debug">Debugging Practice</Link></li>
          {/* <li><a>Tutorials</a></li> */}
        </ul>
      </header>
      <div style={{marginTop: "55px"}}>
      <select onChange={handleProblemChange} value={selectedProblem.id} >
        {problems.map(p=>(
          <option key={p.id} value={p.id}>{p.title}</option>
        ))}
      </select>
      <p style={{color:"white",fontSize:"18px", marginBottom:"10px"}}> {selectedProblem.description} </p>
      <div style ={{height:'50vh'}}>
        <Editor
          height="100%"
          defaultLanguage="java"
          theme="vs-dark"
          value={userCode}
          onChange={(value)=>setUserCode(value)}
        />
      </div>
      
      <button id="submit" onClick={handleSubmit}
      style={{marginTop: '15px', background:"black", color:"white", padding:"5px", border:"1px solid white", borderRadius:"10px", width:"300px"
       }}>Submit</button>
      {feedback && <p style={{color:"white"}}>{feedback}</p>}
      </div>
      <footer>
        <Link to="/PP">Privacy Policy</Link>
        <p style={{color:"white"}}>© By Snakestongue. All right reserved.</p>
      </footer>
    </div>
    
  );
}
export default App;