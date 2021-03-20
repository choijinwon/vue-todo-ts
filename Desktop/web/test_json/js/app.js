let TABLE_DATA;

function getData(){
  return new Promise((res,req)=>{
    $.get('/json/data.json',(response)=>{
      if(response){
        res(response);
      }
      else{
        req(new Error('Error'));
      }
    })
  })
}

//response 데이터 호출 
getData().then((response)=>{
  let vm = window;
  vm.TABLE_DATA = [...response.TABLE_DATA];
  showList(vm.TABLE_DATA);
  dataListRandom(vm.TABLE_DATA);
})


//화면 리스트 
function showList(data){
 data.forEach(row => {
  let tr = document.createElement('tr');
  let td01 = document.createElement('td');
  td01.innerText = row.id;
  tr.appendChild(td01);

  let td02 = document.createElement('td');
  let imgUrl = document.createElement('img');
  imgUrl.setAttribute('src',row.thumbnailUrl);
  td02.appendChild(imgUrl)
  tr.appendChild(td02);

  let td03 = document.createElement('td');
  td03.innerText = row.name;
  tr.appendChild(td03);

  let td04 = document.createElement('td');
  td04.innerText = row.price;
  tr.appendChild(td04);

  document.querySelector('.container .contents .table tbody').appendChild(tr);   

 });

}

function delList(){
  document.querySelector('.container .contents .table tbody').innerHTML ="";
}

document.getElementById('start').addEventListener('click',starRandom)
document.getElementById('stop').addEventListener('click',stopRandom)
document.getElementById('sort').addEventListener('click',sortRandom)

function sortRandom(){
  const vm =window;
  delList();
  vm.TABLE_DATA.sort((a,b)=>{
    return b.price-a.price;
  })
  vm.TABLE_DATA.sort((a,b)=>{
    if(a.price == b.price){
      return a.id-b.id;
    }

  })
  showList(vm.TABLE_DATA);
}


function sortList(data){
  return data.sort(()=>{
    return Math.random() - Math.random();
  })
}


function dataListRandom(data){
    const vm =window
    delList();
    data = sortList(vm.TABLE_DATA);
    showList(data);
}


var btnStart =null
function starRandom(){
 btnStart= setInterval(()=>{
  dataListRandom();
  },3000)
}

function stopRandom(){
  clearInterval(btnStart);
  btnStart =null
}
