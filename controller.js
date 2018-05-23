var aItems = document.getElementsByTagName('item');
var aPages = document.getElementsByTagName('page');

for (var i = 0; i < aItems.length; i++) {
	aItems[i].onclick = e => setPage(e.target.id);
}

setPage('auth');
// setPage('cabinet-accounts');

function setPage (id){
	document.body.scrollTop = 0
	for (var i = 0; i < aPages.length; i++) {
		if ( id == aPages[i].id ) {
			aPages[i].classList.add('active');
			aItems[i].classList.add('active');
		} else {
			aPages[i].classList.remove('active');
			aItems[i].classList.remove('active');
		}
	}
}

document.querySelector('page#auth button').onclick = function(e) {
	setPage('cabinet-accounts');
	document.querySelector('.menu').classList.add('active')
	document.querySelector('content').classList.add('active');
	window.btnLogOut.style.display = "block";
}

document.querySelector('page#auth #linkReg').onclick = function (e) {
	setPage('reg');
}
document.querySelector('page#reg #btnConsel').onclick = function (e) {
	setPage('auth');

}
window.btnLogOut.onclick = function(e) {
	if (window.confirm("Do you really want to leave?")) { 
		setPage('auth');
		document.querySelector('.menu').classList.remove('active')
		document.querySelector('content').classList.remove('active');
		window.btnLogOut.style.display = "none";
	}
}