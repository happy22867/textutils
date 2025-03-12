
import Alert from './components/Alert';
import './App.css';
//  import About from './components/About';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
 import React, { useState } from 'react';
//  import{
//   BrowserRouter  as Router,
//   Routes,
//   Route,
//   Link
// }from "react-router-dom"; 
 
//  export default function App() {

//    return (
//      <div>
       
//      </div>
//    )
//  }
 
function App() {






 const[clss,setBtn]=useState('primary')
  const [mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  
const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

}

const btnClass=(abc)=>{
  setBtn(abc);
}



const toggleMode=()=>{
  if(mode==='light'){
    setMode("dark")
    document.body.style.backgroundColor='rgb(33 37 41)'
    showAlert("Dark mode enabled","danger");
    document.title="TextUtils-darkmode";
  }
  else{
    setMode("light")
     document.body.style.backgroundColor='white'
     showAlert("Light mode enabled","danger");
     document.title="TextUtils-lightmode"
  }
}

    return (
    <>
    
     {/* <Router> */}
    <Navbar  title="TextUtils" mode={mode}   toggleMode={toggleMode}  />
   <Alert alert={alert}/>

   {/* <Navbar title="Textutils"  aabout="About"/> */}
    <div className="container">
        
     {/* <Routes> */}
     {/* <Route  exact path="/about" element={ <About/>}/> */}
     
     {/* <Route path="/users">
     <Users/> 
     </Route> */}
     {/* <Route exact path="/" element={ <TextForm   btnClass={btnClass}  showwAlert={showAlert}heading="Enter The Text to Analyze" mode={mode}/>}/> */}

     
{/* </Routes> */}

      <TextForm   btnClass={btnClass}  showwAlert={showAlert}heading="Enter The Text to Analyze" mode={mode}/>
           
      {/* /> */}
     {/* <About/>  */}
      </div>
      {/* </Router> */}
   </> 
  
  );
}

export default App;
