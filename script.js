// document.onreadystatechange = function (){
//     if(document.readyState !== 'complete'){
//         document.querySelector("body").style.visibility = "hidden";
//         document.querySelector("#spinner").style.visibility = "visible";
//     }
//     else{
//         document.querySelector("body").style.visibility = "visible";
//         document.querySelector("#spinner").style.visibility = "hidden";

//     }
// }
document.querySelector("#spinner").style.visibility = "visible";


function callApi(){
fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => showQuotes(data))
  .catch(error => console.log(error));
}
//   console.log(data);


function showQuotes(data){
    document.querySelector("#spinner").style.visibility = "hidden";
  document.getElementById('random').innerHTML = data.content;

}

setTimeout(callApi,1000)

document.getElementById('newQ').addEventListener('click',callApi);
