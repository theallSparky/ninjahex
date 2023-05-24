// A special thank you to youtuber 'Chris DeLeon of HomeTeam GameDev' 
// with his video 'Coding an HTML5 Canvas Game with JS in 5 min 30 sec' 
// for helping me with the setup            url = 
window.onload = function() {



    var canvas = document.getElementById('canvas'); // Generates the canvas upon loading up of the page
    function resizeCanvas() {
        //Some code to appropriately resize the canvas
    }
    var context = canvas.getContext("2d");      //Allows us to draw shapes onto the canvas
    
    context.fillstyle = "#FF0000"
    context.rect(50, 50, 75, 75);
    context.fill();

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
