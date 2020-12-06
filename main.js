var canvas = new fabric.canvas("mycanvas")

block_image_width = 30;
block_image_height = 30

player_x = 10;
player_xy = 10;

var avenger_object= "";


function player_update()
{
	new.Image.fromURL("avenger_bg.jpg"), function(Img) {
        avenger_object = Img;
       
        avenger_object.scaleToWidth(150);
        avenger_object.scaleToHeight(140);
        avenger_object.set({
	top:avenger_y,
	left:avenger_x
    });
    
    if(keypressed == '70')
    {
        new_image('iron_face.png');
        console.log("f");
    }

    if(keypressed == '66')
    {
        new_image('spiderman_body.png');
        console.log("b");
    }

    if(keypressed == '76')
    {
        new_image('hulk_face.png');
        console.log("l");
    }


    if(keypressed == '82')
    {
        new_image('thor_right_hand.png');
        console.log("r");
    }

    if(keypressed == '72')
    {
        new_image('captain_america_left_hand.png');
        console.log("h");
    }


    if(keypressed == '70')
    {
       up();
        console.log("up");
    }


    if(keypressed == '40')
    {
       down();
        console.log("down");
    }

    if(keypressed == '37')
    {
       left();
        console.log("left");
    }

    if(keypressed == '39')
    {
       right();
        console.log("right");
    }
}
}