// A special thank you to youtuber 'Chris DeLeon of HomeTeam GameDev' 
// with his video 'Coding an HTML5 Canvas Game with JS in 5 min 30 sec' 
// for helping me with the setup            :)

window.onload = function() {

    const canvas = document.getElementById('canvas');    // Generates the canvas upon loading up of the page
    const c = canvas.getContext("2d");                   //Allows us to draw shapes onto the canvas    

    //const startZone = c.strokeRect(10, 10, 90, 90);      // Creates the starting area
    const endZone = c.strokeRect(650, 400, 100, 100);    // Creates the ending area


    function makeStartingZone() {
        c.beginPath();
        c.moveTo(10, 10);
        c.lineTo(10, 100);
        c.lineTo(100, 100);
        c.lineTo(100, 10);
        c.lineTo(10, 10);
        c.stroke();
        c.fillStyle = "green"
        c.fill()
    }
    function makePlayer() {                              // Draw and enclose Hex
        c.beginPath();
        c.moveTo(45, 25);
        c.lineTo(25, 45);
        c.lineTo(45, 65);
        c.lineTo(65, 65);
        c.lineTo(85, 45);
        c.lineTo(65, 25);
        c.lineTo(45, 25);
        c.fillStyle = "orange";
        c.stroke();
        c.fill();           
    }
    function makeBoundary() {                            // Draws the border of playable window 5px away from edge of canvas
        c.beginPath();
        c.moveTo(5, 5);
        c.lineTo(5, 595);
        c.lineTo(795, 595);
        c.lineTo(795, 5);
        c.lineTo(5, 5);
        c.stroke();
    }
    function makeRedL() {
        c.beginPath();
        c.moveTo(110, 5)
        c.lineTo(110, 500)
        c.lineTo(350, 500)
        c.lineTo(350, 450)
        c.lineTo(175, 450)
        c.lineTo(175, 5)        
        c.stroke();
        c.fillStyle = "red"
        c.fill()
    }
    function makeRedI() {
        c.beginPath()
        c.moveTo(450, 600)
        c.lineTo(450, 550)        
        c.lineTo(500, 550)        
        c.lineTo(500, 350)        
        c.lineTo(450, 350)        
        c.lineTo(450, 300)        
        c.lineTo(625, 300)        
        c.lineTo(625, 350)        
        c.lineTo(575, 350)        
        c.lineTo(575, 550)
        c.lineTo(625, 550)        
        c.lineTo(625, 600)
        c.lineTo(450, 600)        
        c.fillStyle = "red"
        c.stroke();
        c.fill()
    }



    makeStartingZone()
    makePlayer();
    makeBoundary();
    makeRedL();
    makeRedI();


    //SET TIMEOUT OR WINDOW.REQUESTANIMATIONFRAME(CALLBACK)
    //SET C

}
