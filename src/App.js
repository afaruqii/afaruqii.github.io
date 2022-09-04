import './App.css';
import React from 'react';
import { ReactTerminal } from 'react-terminal';
import { Fab } from '@mui/material';
import LinkedIn from '@mui/icons-material/LinkedIn';
import { Twitter } from '@mui/icons-material';
function App() {

  const externalURLNavigator = (link, prompt) => {
    let tID = setTimeout(function () {
      window.location.href = link;
      window.clearTimeout(tID);		// clear time out.
  }, 1000);
  return prompt
  };
  const commands = {
    whoami: "Ahmad Faruqi",
    twitter :  () =>  `${externalURLNavigator("https://twitter.com/afaruqii", "to the bird app we go...")}` ,
    linkedin: () => externalURLNavigator("https://linkedin.com/in/ahmad-faruqi/", "LinkedIn? coming right up!" ),
    cd: (directory) => `changed path to ${directory}`,
    
    
   }
   
  
  return (
    <div className="App" style={{background:"grey", height:"100vh"}}>
    <br>
    </br>
      <div style={{width:"900px", height:"600px", margin:"auto"}}>
       <ReactTerminal welcomeMessage={`Welcome! For more information, type "whoami" `} commands={commands} theme="dracula" prompt="~"/>
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
