const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

const oikea=1;
const vasen =2;

const musta=3;
const valkea=4;

function piirraPuikula(x,y,z,d){
    ctx.strokeStyle='black';
    if(z===oikea){                    //jos suunta on oikea
        ctx.beginPath();
        ctx.translate((x+15),(y+30)); 
        ctx.rotate((Math.PI / 180) * 30);
        ctx.scale(0.5,1);
        ctx.arc(0,0,30,0,Math.PI*2,true);
        if(d===musta){               //jos väri on musta
            ctx.fillStyle='black';
            ctx.fill();
            ctx.resetTransform();
        }else{                  //jos väri on valkea
            ctx.stroke();
            ctx.resetTransform();
        }
    }else{                      // jos suunta on vasen
        ctx.beginPath();    
        ctx.translate((x+15),(y+30));
        ctx.rotate((Math.PI / 180) * -30);
        ctx.scale(0.5,1);
        ctx.arc(0,0,30,0,Math.PI*2,true);
        if(d===musta){               //jos väri on musta
            ctx.fillStyle='black';
            ctx.fill();
            ctx.resetTransform();
        }else{                  //jos väri on valkea
            ctx.stroke();
            ctx.resetTransform();
        }
    }
}




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
    ctx.srokeStyle='black';

    ctx.beginPath();
    ctx.translate((x+15),(y+30));   
    ctx.rotate((Math.PI / 180) * -30);
    ctx.scale(0.5,1);
    ctx.arc(0,0,30,0,Math.PI*2,true);   
    ctx.stroke();
    ctx.resetTransform()

}



//piirraMustaPuikula(80,35);
//piirraValkeaPuikula(125,35);
//piirraMustaPuikula(170,35)
//piirraValkeaPuikula(215,35);


//piirraValkeaPuikulaTaakse(260,35);

piirraPuikula(50,100,vasen,valkea);//valkoinen vasen toimii
piirraPuikula(50,150,vasen,musta);//
piirraPuikula(50,200,oikea,valkea);//valkoinen vasen toimii
piirraPuikula(50,250,oikea,musta);