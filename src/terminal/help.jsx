import React from "react";
const styleCommands ={ color:"DeepPink",  fontWeight: "700"};

const help = (

    
    <div>
      Here are all the supported commands:
      <br />
      &emsp;-{" "}
      <span style={styleCommands}>help</span>:
      displays this message
      <br />
      &emsp;-{" "}
      <span style={styleCommands}>whoami</span>:
      displays a quick introduction about me
      <br />
      &emsp;-{" "}
      <span style={styleCommands}>clear</span>:
      clears the terminal
      <br />
      &emsp;-{" "}
      <span style={styleCommands}>linkedin</span>:
      takes you to my LinkedIn
      <br />
      &emsp;-{" "}
      <span style={styleCommands}>twitter</span>:
      takes you to my Twitter
      <br />
      &emsp;-{" "}
      <span style={styleCommands}>tich</span>:
      Wouldn't you like to know?
    </div>
  );
  
  export default help;