// A special thank you to youtuber 'Chris DeLeon of HomeTeam GameDev' 
// with his video 'Coding an HTML5 Canvas Game with JS in 5 min 30 sec' 
// for helping me with the setup            :)

window.onload = function() {

    const canvas = document.getElementById('canvas');    // Generates the canvas upon loading up of the page
    const c = canvas.getContext("2d");                   //Allows us to draw shapes onto the canvas    

    //const startZone = c.strokeRect(10, 10, 90, 90);      // Creates the starting area
    //const endZone = c.strokeRect(650, 400, 100, 100);    // Creates the ending area


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
    function makeEndZone() {
        c.beginPath();
        c.moveTo(650, 400)
        c.lineTo(650, 500)
        c.lineTo(750, 500)
        c.lineTo(750, 400)
        c.lineTo(650, 400)
        c.stroke()
        c.fillStyle = "green"
        c.fill()
    }
    function makePlayer() {             // Draw and enclose Hex
        let xAxis1 = 45
        let xAxis2 = 25
        let xAxis3 = 65
        let xAxis4 = 85
        let yAxis1 = 35
        let yAxis2 = 55
        let yAxis3 = 75

        c.beginPath();
        c.moveTo(xAxis1, yAxis1);
        c.lineTo(xAxis2, yAxis2);
        c.lineTo(xAxis1, yAxis3);
        c.lineTo(xAxis3, yAxis3);
        c.lineTo(xAxis4, yAxis2);
        c.lineTo(xAxis3, yAxis1);
        c.lineTo(xAxis1, yAxis1);
        c.fillStyle = "orange";
        c.stroke();
        c.fill(); 
        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowDown') {
                yAxis1+=5
                yAxis2+=5
                yAxis3+=5
                c.beginPath();
                c.moveTo(xAxis1, yAxis1);
                c.lineTo(xAxis2, yAxis2);
                c.lineTo(xAxis1, yAxis3);
                c.lineTo(xAxis3, yAxis3);
                c.lineTo(xAxis4, yAxis2);
                c.lineTo(xAxis3, yAxis1);
                c.lineTo(xAxis1, yAxis1);
                c.fillStyle = "orange";
                c.stroke();
                c.fill();            //} else if (event.key === 'ArrowRight') {
            } else if (event.key === 'ArrowRight') {
                xAxis1+=5
                xAxis2+=5
                xAxis3+=5
                xAxis4+=5
                c.beginPath();
                c.moveTo(xAxis1, yAxis1);
                c.lineTo(xAxis2, yAxis2);
                c.lineTo(xAxis1, yAxis3);
                c.lineTo(xAxis3, yAxis3);
                c.lineTo(xAxis4, yAxis2);
                c.lineTo(xAxis3, yAxis1);
                c.lineTo(xAxis1, yAxis1);
                c.fillStyle = "orange";
                c.stroke();
                c.fill();            
                //} else if (event.key === 'ArrowRight') {
            }
        });
    }

        // c.beginPath();
        // c.moveTo(xAxis1, yAxis1);
        // c.lineTo(xAxis2, yAxis2);
        // c.lineTo(xAxis1, yAxis3);
        // c.lineTo(xAxis3, yAxis3);
        // c.lineTo(xAxis4, yAxis2);
        // c.lineTo(xAxis3, yAxis1);
        // c.lineTo(xAxis1, yAxis1);
        // c.fillStyle = "orange";
        // c.stroke();
        // c.fill();           
    
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

    draw()
    makeStartingZone()      // To actually put the shapes on the canvas
    makeEndZone()
    makePlayer();
    makeBoundary();
    makeRedL();
    makeRedI();

     //setInterval(draw, 50)             //The js logic to referesh the cavas every '20' ms
  
    function draw() {                   //Clears and redraws all other shape functions 
        c.clearRect(0, 0, 800, 600)
        makeStartingZone();
        makeEndZone();
        makeBoundary();
        makeRedL();
        makeRedI();
        makePlayer();
    }
}
