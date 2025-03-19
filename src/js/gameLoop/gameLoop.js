// gameLoop.js

function gameLoop()
{
    timerId = setInterval(function()
    {
        ge("counterTextbox").value = counter;

        counter += 1;
    }, fps);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

