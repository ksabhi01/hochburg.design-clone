var fullloader = document.getElementById('loader');
var locationid = document.getElementById('location');
var crossid = document.getElementById('cross');
var outermenu = document.getElementById('outer');
var innermenu = document.getElementById('inner');
var footer1 = document.getElementsByClassName('footersocial');
var footermenu = document.getElementsByClassName('Menu-footer');
var footer2 = document.getElementsByClassName('Footer-contact');
var headervideo = document.getElementById('headvideo');
var maindiv = document.getElementById('main');
var blankPage = document.getElementById('blankscreen');
var loadertext = ['bold','loud','iconic','sick','brave','rad','simple','sick','elite'];
var loadtextid = document.getElementById('loadText');
var crossid1 = document.getElementById('crossdiv1');
var crossid2 = document.getElementById('crossdiv2');
var barid1 = document.getElementById('bar1');
var barid2 = document.getElementById('bar2');

var time ;
var i = 0;
function loadingStart(){
	headervideo.pause();
	setTimeout(showLoader,1000);
	setTimeout(showpage,4500);
}
function showLoader(){
	blankPage.style.display = 'none';
	fullloader.style.display = 'block';
	loader();
}
function loader(){
	setTimeout(loadTextChange(),200);
	setTimeout(()=> clearInterval(time),(loadertext.length+1)*110 + 250);
	setTimeout(()=> loadtextid.style.opacity="0",(loadertext.length+1)*110 + 300);
	setTimeout(()=>{loadtextid.style.display="none"
					crossid1.style.display='block';	
					crossid2.style.display='block';	
			crossid1.classList.add('cscale1');	
			crossid2.classList.add('cscale2');
			},(loadertext.length+1)*110 + 1000);
	function loadTextChange(){
		time = setInterval(
			()=>{
				if(i<loadertext.length)
					loadtextid.innerHTML = loadertext[i];
				else
					i = 0;	
				i++;
			}
		,100);
	}
}
function showpage(){
	headvideo.play();
	fullloader.style.display = 'none';
	maindiv.classList.add('show');
}
function menu() {
	if(headvideo.style.visibility == '' || headvideo.style.visibility == 'visible'){
		headvideo.style.visibility = 'hidden';
		locationid.style.visibility = 'visible';
		outermenu.style.visibility = 'visible';
		crossid.style.visibility = 'hidden';
		footer1[0].style.visibility = 'hidden';
		footer2[0].style.visibility = 'hidden';
		footermenu[0].style.display = 'block';
		inner.scrollTo(0,200);
	}
	else{
		headvideo.style.visibility = 'visible';
		locationid.style.visibility = 'hidden';
		outermenu.style.visibility = 'hidden';
		crossid.style.visibility = 'visible';
		footer1[0].style.visibility = 'visible';
		footer2[0].style.visibility = 'visible';
		footermenu[0].style.display = 'none';
	}
}
var i = 0;
var j = loadertext.length - 1;
function menuscroll(){
	if(inner.scrollTop> 200){
		if(i == loadertext.length)
			i=0;
		document.getElementById('content').innerHTML += '<h1>'+loadertext[i]+'</h1>';
		i++;
	}
	if(inner.scrollTop == 0){
		if(j == -1)
			j= loadertext.length - 1;
		console.log(j);
		document.getElementById('contentTop').innerHTML += '<h1>'+loadertext[j]+'</h1>';
		j--;
	}
}






