
const myImage = document.getElementById("mainImage");
const nameContext = document.querySelector(".nameConten");
console.log(name)
const imageArray = [...TABLE_DATA];
let imageIndex = 0;

document.getElementById('startBtn').addEventListener('click',startFun)
document.getElementById('stopBtn').addEventListener('click',stopFun)


function changeImage(data) {
  data = imageArray;
  for(let i=0; i<data.length;i++){
      myImage.setAttribute("src", imageArray[imageIndex].thumbnailUrl);
      nameContext.innerHTML = imageArray[imageIndex].name;
  }
  imageIndex++
}
changeImage(imageArray);
function startFun(){
    setStart =setInterval (()=>{
      changeImage(imageArray)
    },3000)
}

function stopFun(){
  clearInterval(setStart)
}









