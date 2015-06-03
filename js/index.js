var h1=document.createElement("h1");
h1.innerHTML = "OMBD Movies About Pizza";
document.body.appendChild(h1);

var xhr= new XMLHttpRequest();
xhr.open('GET', 'http://www.omdbapi.com/?s=pizza');
xhr.addEventListener('load',function () {
var response= xhr.response;
var responseData= JSON.parse(response);
console.log(responseData);


//<p><a href='/show.html?">Mystic</a></p>

for (var i = 0; i < responseData.Search.length; i++) {
  var respondseid=responseData.Search[i].imdbID
  var a = document.createElement('a');
  a.innerHTML= responseData.Search[i].Title;
  a.href='/show.html?i='+ respondseid

  var p=document.createElement("p");
  p.appendChild(a);

  document.body.appendChild(p);
  console.log(a.href)

}

});

xhr.send();
