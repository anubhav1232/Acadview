// var btns = document.querySelectorAll('#movie-list .delete');
// btns.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//        const li = e.target.parentElement; 
//         li.parentNode.removeChild(li)
//     }); });

 var list = document.querySelector('#movie-list ul');

 list.addEventListener('click', function(e){
 if(e.target.className === 'delete'){          // We want to get where did the click happened, so className
     const li = e.target.parentElement;         // this is the li which is the parent to the delete and we want to delete it.
    li.parentNode.removeChild(li);
     list.removeChild(li);
 };
 });
const addForm = document.forms['add-movie'];
var list = document.querySelector('#movie-list ul');
addForm.addEventListener('submit',function(e)
{
	e.preventDefault();
	const value = addForm.querySelector('input[type = "text"]').value;
	const li = document.createElement('li');
	const movieName = document.createElement('span');
	const deleteBtn = document.createElement('span');
	li.appendChild(movieName);
	li.appendChild(deleteBtn);
	list.appendChild(li);
	deleteBtn.textContent = 'Delete';
	movieName.textContent = value;
	movieName.classList.add('name');
	deleteBtn.classList.add('delete');
});
var mlist = document.querySelector('ul');
function Hide(){
	if(mlist.style.display == "") {
		mlist.style.display = "none";
	}
	else {
		mlist.style.display = "";
	}
}
function search() {
	var input, filter, ul, a, i, txtValue;
	input = document.getElementsByTagName("input")[0];
	filter = input.value.toUpperCase();
	li = document.getElementsByTagName("li")
;	for(i = 0; li.length; i++)
	{
		a=li[i].getElementsByClassName("name")[0];
		txtValue = a.textContent || a.innerText;
		if(txtValue.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		}
		else {
			li[i].style.display = "none";	
		}
	}
}

/*
*/
/* CONSOLE COMMANDS USE EM
title 
title.forEach(function(t){
	console.log(t);
})
var titleArr= Array.from(title);
titleArr
titleArr.forEach(function(t){
	console.log(t);
})
QUERY SELECTOR 
var pB=document.querySelector('#page-banner');
pB
var pB1=document.querySelector('#page-banner .title');
pB1
var movie3=document.querySelector('#movie-list: nth-child(2).name');
movie3
var movie1=document.querySelector('#movie-list li.name');
var movie1=document.querySelectorAll('#movie-list li.name;);
movie1;
var title2=document.querySelectorAll('title');
title2;
var movies = document.querySelectorAll('#movie-list li .name');
undefined
movies
NodeList(4) [span.name, span.name, span.name, span.name]

##TO FUCK THE CODE	
var movies = document.querySelectorAll('#movie-list li .name');
undefined
movies.forEach(function (movie){
movie.textContent+= 'FUCK U';
})
undefined
movies.forEach(function (movie){
movie.textContent= ' FUCK U';

###NODE TIME!#######
var banner = document.querySelector('#page-banner');
undefined
banner
<div id=​"page-banner">​…​</div>​
banner.nodeType
1
banner.nodeName
"DIV"
var eventEx = document.querySelector('#movie-list .title');

undefined
eventEx
<h2 class=​"title">​Movies to Watch​</h2>​
eventEx.addEventListener('click', function(e){
    console.log('Clicked The title');
})
undefined
147 Clicked The title

###Deleting BUTTON####
var btns = document.querySelectorAll('#movie-list .delete');
btns
NodeList(4) [span.delete, span.delete, span.delete, span.delete]
btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
       const li = e.target.parentElement; 
        li.parentNode.removeChild(li)
    }); });


    var list =document.querySelector('#movie-list-ul');
    list.addEventListener('click' ,function(e) {
    if(e.target.className === 'delete') {
        console.log(e.target);
        const li=e.target.parentElement;
        console.log(li);
        list.parentNode.removeChild(li);
    	list.removeChild(li);
    }
   )}

   addForm = document.forms['add-movie'];
   document.forms;
   e.preventDefault();
*/