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
      <header style={{
        background: "rgb(15,15,15)",
        margin:0,
        padding:"10px",
        width: "100%",      
        position:"fixed", 
        top:0,
        left:  0,
        zIndex:1000,  
        boxShadow:" 0px 2px 20px white",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around"
      }}>
        <h1>FRC Programming Practice</h1>
        {/* <select>
          <option>M.C</option>
          <option>Coding</option>
        </select> */}
      </header>
      <div style={{marginTop: "135px"}}>
      <select onChange={handleProblemChange} value={selectedProblem.id} >
        {problems.map(p=>(
          <option key={p.id} value={p.id}>{p.title}</option>
        ))}
      </select>
      <p style={{color:"white",fontSize:"18px", marginBottom:"10px"}}> {selectedProblem.description} </p>
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