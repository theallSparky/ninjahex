// A special thank you to youtuber 'Chris DeLeon of HomeTeam GameDev' 
// with his video 'Coding an HTML5 Canvas Game with JS in 5 min 30 sec' 
// for helping me with the setup            :)

window.onload = function() {

    const canvas = document.getElementById('canvas')     // Generates the canvas upon loading up of the page
    const c = canvas.getContext("2d")                    // Allows us to draw shapes onto the canvas        

    function makeStartingZone() {   // Creates the starting zone
        c.beginPath()
        c.moveTo(10, 10)
        c.lineTo(10, 100)
        c.lineTo(100, 100)
        c.lineTo(100, 10)
        c.lineTo(8, 10)
        c.lineWidth = 5;
        c.strokeStyle = "black"
        c.stroke()
        c.fillStyle = "green"
        c.fill()
    }

    function makeEndZone() {       // Creates the ending zone
        c.beginPath()
        c.moveTo(650, 400)
        c.lineTo(650, 500)
        c.lineTo(750, 500)
        c.lineTo(750, 400)
        c.lineTo(648, 400)
        c.strokeStyle = "black"
        c.stroke()
        c.fillStyle = "green"
        c.fill()
    }

    function makeBoundary() {     // Draws the border of playable window 5px away from edge of canvas
        c.beginPath()
        c.moveTo(5, 5)
        c.lineTo(5, 595)
        c.lineTo(795, 595)
        c.lineTo(795, 5)
        c.lineTo(5-2, 5)           // -2 fixes the bottom left visial bug
        c.strokeStyle = "red"
        c.stroke()
    }

    function makeRedL() {
        c.beginPath()
        c.moveTo(110, 5)
        c.lineTo(110, 500)
        c.lineTo(300, 500)
        c.lineTo(300,450)
        c.lineTo(175, 450)
        c.lineTo(175, 5)
        c.lineTo(110-2, 5)          // -2 fixes the top left visial bug
        c.strokeStyle = "black"
        c.stroke()
        c.fillStyle = "red"
        c.fill()
    }

    function makeRedI() {           // Creates the red 'I' zone
        c.beginPath()
        c.moveTo(500, 595)  // bottom left
        c.lineTo(500, 350)
        c.lineTo(425, 350) 
        c.lineTo(425, 300)  // top left
        c.lineTo(650, 300)  // top right
        c.lineTo(650, 350)
        c.lineTo(575, 350)                
        c.lineTo(575, 595)  // bottom right
        c.lineTo(500-2, 595)        // -2 fixes the bottom left visial bug 
        c.strokeStyle = "black"
        c.stroke()
        c.fillStyle = "red"
        c.fill()
    }

    function makePlayer() {             // Draw and enclose player
        let xAxis1 = 50                 // Sets the spawn location of Hex upon initial loading up of page
        let xAxis2 = 80
        let yAxis1 = 30
        let yAxis2 = 60

        c.beginPath()                   //With each move, update position and restroke and recolor
        c.moveTo(xAxis1, yAxis1)
        c.lineTo(xAxis1, yAxis2)
        c.lineTo(xAxis2, yAxis2)
        c.lineTo(xAxis2, yAxis1)
        c.lineTo(xAxis1 - 2, yAxis1)                // -2 to fix the visual glitch of top left not fully applying the 5px thickness uniformly
        c.fillStyle = "orange"
        c.strokeStyle = "black"
        c.stroke()
        c.fill()
        document.addEventListener('keydown', (event) => {   // If up, right, down, or left is pressed, increment/decrement corresponding xAxis & yAxis positions according to whichever button
            if (event.key === 'ArrowDown') {
                yAxis1+=5
                yAxis2+=5
                c.beginPath()
                c.moveTo(xAxis1, yAxis1)
                c.lineTo(xAxis1, yAxis2)
                c.lineTo(xAxis2, yAxis2)
                c.lineTo(xAxis2, yAxis1)
                c.lineTo(xAxis1 - 2, yAxis1)        // -2 to fix the visual glitch of top left not fully applying the 5px thickness uniformly
                c.fillStyle = "orange"
                c.stroke()
                c.fill()
                checkAllBoundaries()        
            } else if (event.key === 'ArrowRight') {
                xAxis1+=5
                xAxis2+=5
                c.beginPath()
                c.moveTo(xAxis1, yAxis1)
                c.lineTo(xAxis1, yAxis2)
                c.lineTo(xAxis2, yAxis2)
                c.lineTo(xAxis2, yAxis1)
                c.lineTo(xAxis1 - 2, yAxis1)        // -2 to fix the visual glitch of top left not fully applying the 5px thickness uniformly
                c.fillStyle = "orange"
                c.stroke()
                c.fill() 
                checkAllBoundaries()         
            }  else if (event.key === 'ArrowLeft') {
                xAxis1-=5
                xAxis2-=5
                c.beginPath()
                c.beginPath()
                c.moveTo(xAxis1, yAxis1)
                c.lineTo(xAxis1, yAxis2)
                c.lineTo(xAxis2, yAxis2)
                c.lineTo(xAxis2, yAxis1)
                c.lineTo(xAxis1 - 2, yAxis1)        // -2 to fix the visual glitch of top left not fully applying the 5px thickness uniformly
                c.fillStyle = "orange"
                c.stroke()
                c.fill()
                checkAllBoundaries()                    
            }   else if (event.key === 'ArrowUp') {
                yAxis1-=5
                yAxis2-=5
                c.beginPath()
                c.moveTo(xAxis1, yAxis1)
                c.lineTo(xAxis1, yAxis2)
                c.lineTo(xAxis2, yAxis2)
                c.lineTo(xAxis2, yAxis1)
                c.lineTo(xAxis1 - 2, yAxis1)
                c.fillStyle = "orange"
                c.stroke()
                c.fill()
                checkAllBoundaries()          
            }
        });
        function checkCollisionOuterBoundary() {
            if (xAxis1 <= 5 || xAxis2 >= 795 || yAxis1 <= 5 || yAxis2 >= 595) {
                alert('You Touched The Boundary, Game Over, Sucka!')
                location.reload()
            }
        }
        function checkCollisionRedL() {
            if (xAxis1 <= 175 && xAxis2 >= 110 && yAxis1 <= 500 || xAxis1 <= 300 && xAxis2 >= 175 && yAxis1 <= 500 && yAxis2 >=450) {
                alert('How did you touch the red L? If you want it so badly, then take the L! Game Over, Sucka!')
                location.reload()
            }
        }
        function checkCollisionRedT() {
            if (xAxis2 >=500 && xAxis1 <= 575 && yAxis2 >=350 || xAxis1 <= 650 && xAxis2 >= 425 && yAxis1 <= 350 && yAxis2 >= 300) {
                alert('Game Over Sucka!')
                location.reload()
            } 
        }
        function didYouWinYet() {
            if (xAxis1 >= 650 && xAxis2 <= 750 && yAxis1 >=400 && yAxis2 <= 500) {
                alert('Congratulations! You Win, Sucka')
                location.reload()
            }  
        }
        function checkAllBoundaries() {
            checkCollisionOuterBoundary()
            checkCollisionRedL()
            checkCollisionRedT()
            didYouWinYet()
        }
    }                         

    function draw() {                   //Clears and redraws all other shape functions 
        c.clearRect(0, 0, 800, 600)     //Set to 800 and 600 to clear entire canvas with each press of a directional button
        makeStartingZone()
        makeEndZone()
        makeBoundary()
        makeRedL()
        makeRedI()
        makePlayer()
    }

    function resetPlayer() {
        location.reload()
    }

    const resetButton = document.querySelector('#reset')
    resetButton.addEventListener('click', resetPlayer)

    const coolButton = document.querySelector('#cool-button')
    coolButton.addEventListener('click', (event) => {
        alert("Yay! You're cool!")
    })

    const coolerButton = document.querySelector('#cooler-button')
    coolerButton.addEventListener('click', (event) => {
        alert("You fell for the trap! No cookie for you!")
    })

    draw()                  // To actually put the shapes on the canvas each frame --- From here.... 
    makeStartingZone()      
    makeEndZone()
    makeBoundary()
    makeRedL()
    makeRedI()              // ....To here. 
    makePlayer()            
}