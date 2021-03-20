let isDaris = false;
let x = 0;
let y = 0;

const canvas =document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.addEventListener('mousedown',(e)=>{
    x =e.offsetX;
    y =e.offsetY;
    isDaris=true;
})

canvas.addEventListener('mouseup',(e)=>{
    if(isDaris){
        darwPan(ctx,x,y,e.offsetX,e.offsetY);
        x = 0;
        y = 0;
        isDaris=false;
    }
});

canvas.addEventListener('mousemove',(e)=>{
    if(isDaris){
        darwPan(ctx,x,y,e.offsetX,e.offsetY);
        x =e.offsetX;
        y =e.offsetY;
    }
});
canvas.addEventListener('mouseleave',()=>{
    x=0;
    y=0;
    isDaris=false;
})

document.getElementById('clear').addEventListener('click',(e)=>{
    if(ctx !=null){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
})

function darwPan(ctx,x1,y1,x2,y2){
    if(ctx!=null){
        ctx.save();
        ctx.beginPath();
        // ctx.strokeStyle='';
        ctx.lineWidth=1;
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    }
    
}

