var mouseEvent="empty"
var lastX
var lastY

var canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

var color="black"
var width_of_line= 1

canvas.addEventListener("mousedown", my_mousedown)
canvas.addEventListener("mouseup", my_mouseup)
canvas.addEventListener("mousemove", my_mousemove)
canvas.addEventListener("mouseleave", my_mouseleave)

function my_mousedown(){
    console.log ("mousedown")
    mouseEvent="mousedown"
}

function my_mouseup(){
    console.log("mouseup")

    mouseEvent = "mouseup"
}

function my_mousemove(e){
    console.log("mousemove")
    
    var currentX = e.clientX - canvas.offsetLeft
    var currentY = e.clientY - canvas.offsetTop

    if (mouseEvent == "mousedown"){
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = width_of_line
        ctx.moveTo(lastX, lastY)
        ctx.lineTo(currentX, currentY) 
        ctx.stroke()
    }

    lastX = currentX
    lastY = currentY
}

function my_mouseleave(){
    console.log("mouseleave")
    
    mouseEvent = "mouseleave"
}

