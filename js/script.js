'use strict';
function main() {
	
   
   document.querySelector('form input').onchange = function(){
        
        
      /*  var val = this.value.split('\\')[2];
        val.name = 'cvbnm';*/
         //var val=this.value.replace(this.value , 'GetByBarcode?clientCode=MOH&result=103000699922468B0x06F2U96648GQ7ISK9SQVOZHCIGJXTM4KE3OE1DODWU1XLDICWNEEBHAIN1606202');
        var result = 'http://egygreeninn.com/gov/eg/Results/'+ this.value.split('\\')[2]+'?clientCode=MOH&result=103000699922468B0x06F2U96648GQ7ISK9SQVOZHCIGJXTM4KE3OE1DODWU1XLDICWNEEBHAIN16062021021955' ; //this.value.split('\\')[2];
      //  console.log(result);        /*var myUrl = new URL('http://egygreeninn.com/Url/Results/');
       // console.log(myUrl);
      //  myUrl.search = 'GetByBarcode?clientCode=MOH&result=103000699922468B0x06F2U96648GQ7ISK9SQVOZHCIGJXTM4KE3OE1DODWU1XLDICWNEEBHAIN1606202';
      //  var result = myUrl + this.value.split('\\')[2];*/
        //this.nextElementSibling = 'final link '+result;
        var image = document.getElementById('output');
     //   image.name = "dsds.png";
	     image.src = URL.createObjectURL(event.target.files[0]);
        
        
        
    const generateBtn = document.getElementById("generateBtn");
	const dataBox = document.getElementById("dataBox");
	const downloadBtn = document.getElementById("downloadBtn");
	const qrcode = document.getElementById("qrcode");
	const qrdiv = document.getElementById("qrdiv");

	const errorClassName = "error";
	const shakeClassName = "shake";
	const dataBoxClassName = "dataBox";
	const toHideClassName = "hide";
	const qrdivClassName = "qrdiv";
        var QR_CODE = new QRCode("qrcode", {
		width: 260,
		height: 260,
		colorDark: "#000000",
		colorLight: "#ffffff",
		correctLevel: QRCode.CorrectLevel.H,
	});
        
    generateBtn.onclick = function (e) {
        //renameFile($('#apply')[0].files[0] , a.files.type , 'GetByBarcode?clientCode=MOH&result=103000699922468B0x06F2U96648GQ7ISK9SQVOZHCIGJXTM4KE3OE1DODWU1XLDICWNEEBHAIN1606202/' )
        
		if (result) {
			generateQRCode(result);
		} else {
			markDataBoxError();
		}
        
	};
        function generateQRCode(data) {
		QR_CODE.clear();
		    //   image.name = "dsds.png";
		QR_CODE.makeCode(data);
		// Show QRCode div
		qrdiv.className = qrdivClassName;
	}

	downloadBtn.onclick = function (e) {
		// Image tag
		const img = qrcode.getElementsByTagName("img")[0];
		// Canvas tag
		const canvas = qrcode.getElementsByTagName("canvas")[0];

		// Padding to QRCode
		const padding = 40;

		// Adding padding to width and height
		canvas.width = canvas.width + padding;
		canvas.height = canvas.height + padding;

		// Canvas context
		const context = canvas.getContext("2d");
		// Clearing previous content
		context.clearRect(0, 0, canvas.width, canvas.height);
		// Making the background white
		context.fillStyle = "#ffffff";
		context.fillRect(0, 0, canvas.width, canvas.height);
		// Adding the image of QRCode
		
		// x and y are padding / 2
		context.drawImage(img, padding / 2, padding / 2);

		// Getting base64 url
		const image = canvas.toDataURL("image/png", 1);
	
		const filename = "QR_Code_" + Date.now() + ".png";
		downloadImage(image, filename);
	};

	function markDataBoxError() {
		const prevClassName = result.className;
		result.className =
			prevClassName + " " + errorClassName + " " + shakeClassName;
		vibrate();
		setTimeout(() => {
			// Reset class
			result.className = prevClassName + " " + errorClassName;
		}, 500);
	}

	

	function vibrate() {
		if (Boolean(window.navigator.vibrate)) {
			window.navigator.vibrate([100, 100, 100]);
		}
	}

	function downloadImage(image, filename) {
		// Creating hidden <a> tag to download
		var element = document.createElement("a");
		element.setAttribute("href", image);
		element.setAttribute("download", filename);
		element.setAttribute("class", toHideClassName);
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
	}
   
}
    
    
	
    
    
   
}

main();


