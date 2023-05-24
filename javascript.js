// A special thank you to youtuber 'Chris DeLeon of HomeTeam GameDev' 
// with his video 'Coding an HTML5 Canvas Game with JS in 5 min 30 sec' 
// for helping me with the setup            
window.onload = function() {


    const canvas = document.getElementById('canvas');   // Generates the canvas upon loading up of the page
    const c = canvas.getContext("2d");                  //Allows us to draw shapes onto the canvas

    c.fillStyle = "black";                              // Change the fillstyle to black for player character
    const playerSquare = c.rect(20, 20, 75, 75);        // Creates the shape of the player character
    c.fill();                                           // Actually fills in the shape of player character
    

    c.fillStyle = "green";                              // Change the fillstyle to green for start/end zones    
    const startZone = c.strokeRect(10, 10, 100, 100);   // Creates the starting area
    const endZone = c.strokeRect(650, 400, 100, 100);   // Creates the ending area




    const bonusArea = c.strokeRect(625, 150, 40, 40);           // Where the bonus coin will be placed



    // function makeHex() {    //Draw and enclose Hex
    //     c.moveTo(50, 50);
    //     c.lineTo(50, 75);
    //     c.stroke();
    //     c.lineTo(75, 75);
    //     c.stroke();
    //     c.lineTo(75, 50);
    //     c.stroke();
    //     c.lineTo(50, 50);
    //     c.stroke();
    // }


    // function makeStartarea() {
    //     c.moveto(1,1);
    //     c.lineTo(1,101)
    //     c.stroke();
    //     c.lineTo(101,101)
    //     c.stroke();
    //     c.lineTo(101,1)
    //     c.stroke();
    //     c.lineTo(1,1)
    //     c.stroke();
    // }


}
