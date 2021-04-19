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
    fabric.Image.fromURL(get_image,function(Img){
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

