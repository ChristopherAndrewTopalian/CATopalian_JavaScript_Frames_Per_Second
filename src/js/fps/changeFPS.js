// changeFPS.js

function changeFPS(whichFPS)
{
    fps = 1000 / whichFPS;

    clearInterval(timerId);

    // start new interval with the updated fps
    gameLoop();
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

