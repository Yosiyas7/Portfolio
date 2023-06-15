import React from "react";

import Typewriter from "typewriter-effect"; 

function Type() {  // Defining a function component called Type
  return (
    <Typewriter
      options={{  // Passing an options object to the Typewriter component
        strings: [  // An array of strings to be displayed by the Typewriter
          "Software Developer",
          "Junior Software Engineer",
          "Full Stack Developer",
          "The Batman",
        ],
        autoStart: true,  // Automatically starts the typewriter effect
        loop: true,  // Loops through the strings indefinitely
        deleteSpeed: 50,  // The speed at which characters are deleted
      }}
    />
  );
}

export default Type;
