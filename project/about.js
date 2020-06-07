

document.addEventListener('DOMContentLoaded', 
	function(){
	document.querySelectorAll('.team').forEach(function(div){
	div.onmouseover = function(){
		document.querySelector('#team').style.display= div.dataset.display
	};	
	});
});


var loc = window...location;
alert(loc);