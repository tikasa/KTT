const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');






function drawGraySquare(x,y,leveys, korkeus){
    
    ctx.fillStyle='rgb(192,192,192)';
  
    ctx.fillRect(x,y,leveys, korkeus);   

}

function piirraSoikio(){//kaarilla
    ctx.beginPath();
    ctx.moveTo(25,25);
    ctx.bezierCurveTo(40,65, 40, 105, 25, 150);
    ctx.stroke();
}

function drawWhiteSquare(x,y,leveys,korkeus){
    ctx.fillStyle='rgb(255, 250, 250)';
    
    ctx.fillRect(x,y,leveys,korkeus);
}


//drawForwardPipWhite(60,35);
//drawForwardPipWhite(130,35);
//drawForwardPipWhite(200,35);


//drawForwardPipWhite(60,100);
//drawForwardPipWhite(170,100);
//drawForwardPipWhite(240,100);

//drawForwardPipWhite(140,165);
//drawForwardPipWhite(210,165);
//drawForwardPipWhite(280,165);


ctx.strokeStyle='black';


function piirraMustaPuikula(x,y){

    ctx.fillStyle='black';

    ctx.beginPath();
    ctx.translate((x+15),(y+30)); 
    ctx.rotate((Math.PI / 180) * 30);
    ctx.scale(0.5,1);
    ctx.arc(0,0,30,0,Math.PI*2,true);   
    ctx.fill();
    ctx.resetTransform();
}

function piirraValkeaPuikula(x,y){

    ctx.strokeStyle='black';

    ctx.beginPath();
    ctx.translate((x+15),(y+30));  
    ctx.rotate((Math.PI / 180) * 30);
    ctx.scale(0.5,1);
    ctx.arc(0,0,30,0,Math.PI*2,true);   
    ctx.stroke();
    ctx.resetTransform();
}

function piirraMustaPuikulaTaakse(x,y){

    ctx.fillStyle='black';

    ctx.beginPath();
    ctx.translate((x+15),(y+30));
    ctx.rotate((Math.PI / 180) * -30);
    ctx.scale(0.5,1);
    ctx.arc(0,0,30,0,Math.PI*2,true);   
    ctx.fill();
    ctx.resetTransform();
}

function piirraValkeaPuikulaTaakse(x,y){
    ctx.fillStroke='black';

    ctx.beginPath();
    ctx.translate((x+15),(y+30));   
    ctx.rotate((Math.PI / 180) * -30);
    ctx.scale(0.5,1);
    ctx.arc(0,0,30,0,Math.PI*2,true);   
    ctx.stroke();
    ctx.resetTransform()

}


//for(i=0;i<6;i++){
//    for (j=0;j<6;j++){
 //       piirraValkeaPuikulaTaakse(80+i*40,35+j*65);
   // }
    
//}

let x=80;
let y=35;

for(i=0;i<6;i++){
    x+=i*40;
    console.log(x);
}
piirraMustaPuikula(80,35);
piirraValkeaPuikula(125,35);
piirraMustaPuikula(170,35)
piirraValkeaPuikula(215,35);


piirraValkeaPuikulaTaakse(260,35);

