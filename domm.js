console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title.textContent = "hello world";
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[12]);
console.log(document.all[8]);
document.all[8].textContent="Hello";
console.log(document.forms);
console.log(document.links);


var headertitle = document.getElementById("header-title");

var header = document.getElementById("main-header");
header.textContent= "hello";
header.innerHTML = "Item Lister";

header.style.borderBottom='solid 3px black'

var list = document.getElementsByClassName("list-group-item");

console.log(list);
list[1].textContent="Hello2";
list[1].style.fontWeight= "bold";
list[1].style.backgroundColor= "yellow";

//list.style.backgroundColor="wheat";

for(var i=0; i<list.length; i++)
{
list[i].style.backgroundColor="pink";


}





var li = document.getElementsByTagName("li");

console.log(li);
li[1].textContent="Hello2";
li[1].style.fontWeight= "bold";
li[1].style.backgroundColor= "yellow";

// li.style.backgroundColor="wheat";

for(var i=0; i<li.length; i++)
{
li[i].style.backgroundColor="wheat";
}



var header = document.querySelector('#main-header');
header.style.border="solid 4px red";
 var input = document.querySelector("input");
 input.value='helloworld';


 var send = document.querySelector('input[type="submit"]');
 send.value="SEND";

 var clas = document.querySelector('.list-group-item');
clas.style.color="red";

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color="green";
lastItem.style.fontWeight="bold";

var allItem = document.querySelector('.list-group-item:nth-child(2)');
allItem.style.color="green";
allItem.style.fontWeight="bold";

var titles = document.querySelector('.title');
titles.style.color="red";


// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = "hello";

var odd = document.querySelectorAll('li:nth-child(odd)');
var even =  document.querySelectorAll('li:nth-child(even)');

for(var i=0; i< odd.length; i++){
    odd[i].style.backgroundColor='grey';
    even[i].style.backgroundColor='orange';

}   