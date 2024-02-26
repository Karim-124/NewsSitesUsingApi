

var myData=[];
function loadDoc(category) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myData=JSON.parse(xhttp.response).articles
        displayDate();
      }
    };
    xhttp.open("GET", "https://newsapi.org/v2/top-headlines?country=us&category="+category+"&apiKey=6a456efddcfe4176951544a01e903f38", true);
    xhttp.send();
  }
function displayDate(){
    var cartonna=``;
    for(var i=0;i<myData.length;i++){
        cartonna+=`<div class="col-md-3">
        <div>
        <img class="w-100" src=`+myData[i].urlToImage+`>
        <h5>`+myData[i].author+`</h5>
        <h5>`+myData[i].title+`</h5>
        </div>
        </div>`
    }
    rowResult.innerHTML=cartonna;
}
loadDoc('general'); 


var links=document.getElementsByClassName("nav-link");
for(var i=0;i<links.length;i++){
    links[i].addEventListener("click",function(eventInfo){
        loadDoc( eventInfo.target.text);

    })
}

























































// var myData=[];
// function getData(category){
//   var http=new XMLHttpRequest();
//   http.open("GET","https:newsapi.org/v2/top-headlines?country=us&category="+category+"&apiKey=6a456efddcfe4176951544a01e903f38")
//   http.send();

//   http.addEventListener("readystatechange",function(){
//     if(http.readyState==4&&http.status==200){
//     myData= JSON.parse( http.response)
//     displayDate()
//     }
//   })
  
// }

// function displayDate(){
//   var cartonna=""
//  for(var i=0;h<myData.length;i++){
//   cartonna+=`<div class="col-md-3">
  
//   <div>
  
//   <h2>`+myData[i].title+`</h2>
//   <p></p>
//   </div>
//   </div>`
//  }
//  document.getElementById("rowResult").innerHTML=cartonna;
// }

// var links=document.getElementsByClassName("nav-link");
// for(var i=0;i<links.length;i++){
//   links[i].addEventListener("click",function(e){
//    getData(e.target.text)
//   })
// }
// getData('sports');




