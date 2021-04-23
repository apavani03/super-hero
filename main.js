var canvas=new fabric.canvas('myCanvas');
player_x=10;
player_y=20;
block_width=30;
block_height=30;
var player="";
var block="";

function player_update(){
fabric.Image.fromURL("player.png",function(Img){
    player=Img;
    player.scaleToWidth(150);
    player.scaleToHeight(140);
    player.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player);

});

}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img)
    {
        block=Img;
        block.scaleToWidth(block_width);
        block.scaleToHeight(block_height);
        block.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block);
    
    });
    
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80')
    {
	    console.log("p and shift pressed together");
	    block_width = block_width + 10;
	    block_height = block_height + 10;
	    document.getElementById("current_width").innerHTML = block_width;
	    document.getElementById("current_height").innerHTML = block_height;	
    }

    if(e.shiftKey && keyPressed == '77')
    {
        console.log("m and shift pressed together");
	    block_width = block_width - 10;
	    block_height = block_height - 10;
	    document.getElementById("current_width").innerHTML = block_width;
	    document.getElementById("current_height").innerHTML = block_height;
    }

    if(keyPressed == '38')
    { 
        up();
        console.log("up");
    }
  
   
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
  

    if(keyPressed == '37')
    {
        left();
        console.log("left");

    }
   
    if(keyPressed == '39')
	{
		right();
		console.log("right");
	}

    
    if(keyPressed == '69')
    {
        new_image("spiderman_body.png");
        console.log("e");
    }

    if(keyPressed == '70')
    {
        new_image("spiderman_left_hand.png");
        console.log("f");

    }

    if(keyPressed == '71')
    {
         new_image("spiderman_right_hand(1).png");
         console.log("g");
    }

    if(keyPressed == '72')
    {
        new_image("ironman_face.png");
        console.log("h");

    }

    if(keyPressed == '73')
    {
        new_image("hulk_legs.png");
        console.log("i");
    }
    
}
function up()
{
   if(player_y >= 0) 
   {
       player_y = player_y - block_height;
       console.log("block_height is : "+block_height);
       console.log("When up arrow pressed, X  = "+ player_x +" & Y = "+ player_y);
       canvas.remove(player);
       player_update();
   }
}

function down() {
    if(player_y <= 500) 
    {
        player_y = player_y + block_height;
        console.log("block_height is : "+block_height);
        console.log("When up arrow pressed, X  = "+ player_x +" & Y = "+ player_y);
        canvas.remove(player);
        player_update();
    }
 }

function left() {
    if(player_x > 0) 
    {
        player_x = player_x - block_width;
        console.log("block_width is : "+block_width);
        console.log("When up arrow pressed, X  = "+ player_x +" & Y = "+ player_y);
        canvas.remove(player);
        player_update();
    }
 }
 function right() {
    if(player_x <= 850) 
    {
        player_x = player_x + block_width;
        console.log("block_width is : "+block_width);
        console.log("When up arrow pressed, X  = "+ player_x +" & Y = "+ player_y);
        canvas.remove(player);
        player_update();
    }
 }