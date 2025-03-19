// extractFileName.js

function extractFileName(whichPath)
{
    let pathParts = whichPath.split('/');

    let fileNameWithExtension = pathParts[pathParts.length - 1];

    let fileNameParts = fileNameWithExtension.split('.');

    // [0] is the file name without extension
    let fileNameOnly = fileNameParts[0];

    return fileNameOnly;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

