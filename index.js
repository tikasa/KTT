function drawCell(ctx,x,y){
    ctx.fillStyle = 'pink';
    ctx.fillRect(x,y,20,20);
};


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

for(let i=0;i<5;i++){
    drawCell(ctx,10+30*i,10);
}

