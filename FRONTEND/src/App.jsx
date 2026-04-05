import { useState } from 'react';
import Editor from '@monaco-editor/react';
import problems from './problems.json';
// import 'App.css'

function App() {
  const [selectedProblem, setSelectedProblem] = useState(problems[0]); // default first problem
  const [userCode, setUserCode] = useState(selectedProblem.starterCode);
  const [feedback, setFeedback] = useState('');
  const handleSubmit=()=> {
    if (userCode.trim()== selectedProblem.solutionCode.trim()){
      setFeedback('Correct!');
    } else {
      setFeedback('Try again.');
    }
  };
  const handleProblemChange=(e)=>{
    const problem = problems.find(p => p.id==parseInt(e.target.value));
    setSelectedProblem(problem);
    setUserCode(problem.starterCode);
    setFeedback('');
  };
  return (
    <div id="mainDiv">
      <header style={{
        background: "rgb(60,60,60)",
        margin:0,
        padding:"10px",
        width: "100%",      
        position:"fixed", 
        top:0,
        left:  0,
        zIndex:1000,       
      }}>
        <h1>FRC Programming Practice</h1>
      </header>
      <div style={{marginTop: "135px"}}>
      <select onChange={handleProblemChange} value={selectedProblem.id} 
      style={{background:'black', color:"white", border:"1px solid white", borderRadius:"10px", fontSize:"20px", padding:"5px", marginBottom:"15px"}}>
        {problems.map(p => (
          <option key={p.id} value={p.id}>{p.title}</option>
        ))}
      </select>
      <div style ={{height:'70vh'}}>
        <Editor
          height="100%"
          defaultLanguage="java"
          theme="vs-dark"
          value={userCode}
          onChange={(value)=>setUserCode(value)}
        />
      </div>
      </div>
      <button id="submit" onClick={handleSubmit}
      style={{marginTop: '15px', background:"black", color:"white", padding:"5px", border:"1px solid white", borderRadius:"10px", width:"300px"
       }}>Submit</button>
      {feedback && <p style={{color:"white"}}>{feedback}</p>}
    </div>
  );
}
export default App;