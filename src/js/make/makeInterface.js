// makeInterface.js

function makeInterface()
{
    ba(makeTitleOfApp());

    //-//

    // mainDiv
    let mainDiv = ce('div');
    mainDiv.id = 'mainDiv';
    mainDiv.className = 'mainDiv';
    mainDiv.style.opacity = 0.0;
    mainDiv.style.marginTop = '5px';
    mainDiv.style.width = '410px';
    setTimeout(function()
    {
        mainDiv.style.opacity = 1.0; 
    }, 10);
    ba(mainDiv);

    //-//

    // counterLabel
    let counterLabel = ce('label');
    counterLabel.textContent = 'Counter';
    counterLabel.id = 'counterLabel';
    counterLabel.className = 'counterLabel';
    counterLabel.title = 'counterLabel';
    mainDiv.append(counterLabel);

    //-//

    // counterTextbox
    let counterTextbox = ce('input');
    counterTextbox.type = 'text';
    counterTextbox.id = 'counterTextbox';
    counterTextbox.className = 'counterTextbox';
    mainDiv.append(counterTextbox);

    //-//

    // linebreak
    let linebreakUnderCounter = ce('hr');
    mainDiv.append(linebreakUnderCounter);

    //-//

    // fpsLabel
    let fpsLabel = ce('label');
    fpsLabel.textContent = 'FPS';
    fpsLabel.id = 'fpsLabel';
    fpsLabel.className = 'fpsLabel';
    mainDiv.append(fpsLabel);

    //-//

    // fpsTextbox
    let fpsTextbox = ce('input');
    fpsTextbox.type = 'text';
    fpsTextbox.placeholder = 1000 / fps;
    fpsTextbox.id = 'fpsTextbox';
    fpsTextbox.className = 'fpsTextbox';
    fpsTextbox.onkeyup = function()
    {
        ge('fpsSlider').value = fpsTextbox.value;

        changeFPS(fpsTextbox.value);
    };
    mainDiv.append(fpsTextbox);

    //-//

    // linebreak
    let linebreakUnderFpsTextbox = ce('hr');
    mainDiv.append(linebreakUnderFpsTextbox);

    //-//

    // fpsSlider
    let fpsSlider = ce('input');
    fpsSlider.type = 'range';
    fpsSlider.id = 'fpsSlider';
    fpsSlider.className = 'fpsSlider';
    fpsSlider.min = '1';
    fpsSlider.max = '120';
    fpsSlider.value = 1000 / fps;
    fpsSlider.step = '1';
    fpsSlider.style.width = '400px';
    fpsSlider.oninput = function()
    {
        clickSound();

        ge('fpsTextbox').value = fpsSlider.value;

        fps = changeFPS(fpsTextbox.value);
    };

    fpsSlider.onchange = function()
    {
        // hoverSound();
    };

    mainDiv.append(fpsSlider);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

