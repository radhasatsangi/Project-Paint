canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var last_position_of_x,last_position_of_y;
var mouseevent="empty";
 color="black";
 linewidht=1;
 canvas.addEventListener("mousedown",mymousedown);
 function mymousedown(e){
 mouseevent="mousedown";

 }
 canvas.addEventListener("mouseup",mymouseup);
 function mymouseup(e){
 mouseevent="mouseup";
 }


 canvas.addEventListener("mouseleave",mymouseleave);
 function mymouseleave(e){
 mouseevent="mouseleave";
 }
 canvas.addEventListener("mousemove",mymousemove);
 function mymousemove(e){
 current_position_of_x= e.clientX - canvas.offsetLeft;
 current_position_of_y= e.clientY - canvas.offsetTop;
 if (mouseevent== "mousedown"){
    current_position_of_x= e.clientX - canvas.offsetLeft;
    current_position_of_y= e.clientY - canvas.offsetTop;
     ctx.beginPath();
     ctx.strokeStyle=color;
     ctx.lineWidth=linewidht;
     console.log("last position of x and y =");
     console.log("x="+ last_position_of_x+"y="+last_position_of_y);
     ctx.moveTo(last_position_of_x,last_position_of_y);

     console.log("Current position of x and y =");
     console.log("x="+ current_position_of_x+"y="+current_position_of_y);
     ctx.lineTo(current_position_of_x,current_position_of_y);
     ctx.stroke();


 }
 last_position_of_x=current_position_of_x;
 last_position_of_y=current_position_of_y;

 }
