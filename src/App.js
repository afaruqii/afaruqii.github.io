import './App.css';
import React from 'react';
import { ReactTerminal } from 'react-terminal';
import { Fab } from '@mui/material';
import LinkedIn from '@mui/icons-material/LinkedIn';
import { Twitter } from '@mui/icons-material';
import WelcomeMessage from './terminal/WelcomeMessage.jsx';
import help from './terminal/help';
import whoami from './terminal/whoami';
function App() {

 


  const externalURLNavigator = (link, prompt) => {
    let tID = setTimeout(function () {
      window.location.href = link;
      window.clearTimeout(tID);		// clear time out.
  }, 1000);
  return prompt
  };
  const commands = {
    whoami: whoami,
    help:help,
    twitter :  () =>  `${externalURLNavigator("https://twitter.com/afaruqii", "to the bird app we go...")}` ,
    linkedin: () => externalURLNavigator("https://linkedin.com/in/ahmad-faruqi/", "LinkedIn? coming right up!" ),
    tich: () => externalURLNavigator("https://www.bluenile.com/ca/wedding-rings", "Aa gayi meri tich?" )
    
   }
   
  return (
    <div className="App" style={{background:"grey", height:"100vh"}}>
    <br>
    </br>
      <div style={{width:"900px", height:"600px", margin:"auto"}}>
       <ReactTerminal 
       welcomeMessage={WelcomeMessage} 
       commands={commands} 
       theme="dracula" 
       prompt={<span style={{color:"deeppink", fontWeight: "700"}}>~</span>}/>
       </div>
        <br>
        </br>
        <Fab variant="extended" href='https://linkedin.com/in/ahmad-faruqi/'>
  <LinkedIn color='blue'/>
</Fab>

<Fab variant="extended" href='https://twitter.com/afaruqii/'>
  <Twitter color='blue'/>
</Fab>
      
        
    </div>
  );

};
export default App;
