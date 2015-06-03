


var query= document.location.search

query=query.replace("?",'');
query=query.split("&")

var newobj={};

for (var i = 0; i < query.length; i++) {
    var splitarray=query[i].split("=");
    newobj[splitarray[0]]=splitarray[1];
}

var id = newobj.i;

var xhr= new XMLHttpRequest();
xhr.open('GET', 'http://www.omdbapi.com/?i='+ id);
xhr.addEventListener('load',function () {
var response= xhr.response;
var responseData= JSON.parse(response);
console.log(responseData);


  for (var key in responseData) {
    if (responseData.hasOwnProperty(key)) {
        var body=document.getElementsByTagName('body')[0];
        var ul = document.createElement("ul");
        body.appendChild(ul);
        var li = document.createElement("li");
        li.innerHTML = (key +":"+ " " + responseData[key]);
        ul.appendChild(li);

};
};
});

xhr.send();
