// console.log(TABLE_DATA);

// "id": "5",
// "name": "cony #5",
// "thumbnailUrl": "image/5.gif",
// "price": 170
// const searchInput = document.querySelector(".search");
// const suggestions = document.querySelector(".container .contents .table tbody");
// searchInput.addEventListener("change", displayMatches);
// searchInput.addEventListener("keyup", displayMatches);


document.getElementById('start').addEventListener('click',startRandom);
document.getElementById('stop').addEventListener('click',stopRandom);
document.getElementById('sort').addEventListener('click',sortRandom);


// $(function($) {
//     $('#filterText').keyup(function(event) {
//         var val = $(this).val();
//         if (val == "") {
//             $('.filter tr').show();
//         } else {
//             $('.filter tr').hide();
//             $(".filter tr:contains('"+val+"')").show();
//             console.log( $(".filter tr:contains('"+val.includes(val)+"')").show())
//         }
//     });
// });



function filter(){

    var value, name, item, i;
    value = document.getElementById("value").value.toUpperCase(); 
    item = document.querySelectorAll("tbody tr");
    console.log(item.length)
    for(i=0;i<item.length;i++){
      name = item[i].querySelectorAll(".name");
      if(name[0].innerHTML.toUpperCase().includes(value)){
        item[i].style.display = "block"; 
      }else{
        item[i].style.display = "none";
      }
    }


  }




  

function arrShowList(data){
   return data.sort(()=>{
       return Math.random() - Math.random();
   })
}
function sortRandom(){
    delList();
    TABLE_DATA.sort((a,b)=>{
        return b.price - a.price;
    })
    TABLE_DATA.sort((a,b)=>{
        if(a.price == b.price){
            return a.id - b.id;
        }
    })
    showList(TABLE_DATA);
}

function delList(){
    document.querySelector('.container .contents .table tbody').innerHTML ="";
}

const statBtn = null;
function startRandom(){
    const vm  =window;
    // console.log('1')
    if(vm.statBtn ==null){
        vm.statBtn = setInterval(()=>{
            randomList();
        },1000)
    }
}
function stopRandom(){
    const vm = window;
    clearInterval(vm.statBtn)
    vm.statBtn=null
}
function randomList(data){
    delList();
    data = arrShowList(TABLE_DATA);
    showList(data);
}

//화면
function showList(data){
    data.forEach(row => {
        let tr  = document.createElement('tr');
        let td01  = document.createElement('td');
        td01.innerText = row.id;
        tr.appendChild(td01);

        let imgList  = document.createElement('img');
        let td02  = document.createElement('td');

        imgList.setAttribute('src',row.thumbnailUrl);
        td02.appendChild(imgList)
        tr.appendChild(td02);

        let td03  = document.createElement('td');
    
        td03.innerText = row.name;
        tr.appendChild(td03);

        td03.className = "name"

        let td04  = document.createElement('td');
        td04.innerText = row.price;
        tr.appendChild(td04);
        document.querySelector('.container .contents .table tbody').appendChild(tr);
 
    });
}

showList(TABLE_DATA);
