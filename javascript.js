// A special thank you to youtuber 'Chris DeLeon of HomeTeam GameDev' 
// with his video 'Coding an HTML5 Canvas Game with JS in 5 min 30 sec' 
// for helping me with the setup            url = 
window.onload = function() {



    const canvas = document.querySelctor('canvas'); // Generates the canvas upon loading up of the page
    function resizeCanvas() {
        //Some code to appropriately resize the canvas
    }
    const context = canvas.getContext('2d');      //Allows us to draw shapes onto the canvas
    
    function makeHex() {    //Draw and enclose Hex
        context.moveTo(50, 50);
        context.lineTo(50, 75);
        context.stroke();
        context.lineTo(75, 75);
        context.stroke();
        context.lineTo(75, 50);
        context.stroke();
        context.lineTo(50, 50);
        context.stroke();
    }
}
