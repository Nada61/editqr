/*function encodeImageFileURL(){
    fileSelect = document.getElementById("fileUp").files;
    if(fileSelect.length>0){
        var fileSelect = fileSelect[0]
        var fileReader = new FileReader();
        fileReader.onload = function(FileLoadEvent){
            var srcData = FileLoadEvent.target.result;
            document.getElementById('imageFile').src = srcData;
            document.getElementById('Base64Data').innerHTML = srcData
}
        fileReader.readAsDataURL(fileSelect)
    }
}

var fileUp = document.getElementById('fileUp');
fileUp.addEventListener("change" , function(){
    //encodeImageFileURL();
    encode = window.btoa(unescape(encodeImageFileURL()));
    decod = window.atob(escape(encodeImageFileURL()));
    
        //decodeURI = encodeImageFileURL();
})*/
/*

function getDataUrl(img) {
   // Create canvas
   const canvas = document.getElementById('canvas');
   const ctx = canvas.getContext('2d');
   // Set width and height
   canvas.width = img.width;
   canvas.height = img.height;
   // Draw the image
   ctx.drawImage(img, 0, 0);
   return canvas.toDataURL('image/jpeg');
    document.getElementById('my-image').src = ctx;
    
}
// Select the image
const img = document.querySelector('#my-image');
img.addEventListener('load', function (event) {
   const dataUrl = getDataUrl(event.currentTarget);
   console.log(dataUrl);
});*/


let img = document.getElementById('output');

// make <canvas> of the same size
let canvas = document.createElement('canvas');
canvas.width = img.clientWidth;
canvas.height = img.clientHeight;

let context = canvas.getContext('2d');

// copy image to it (this method allows to cut image)
context.drawImage(img, 0, 0);
// we can context.rotate(), and do many other things on canvas

// toBlob is async operation, callback is called when done
canvas.toBlob(function(blob) {
  // blob ready, download it
  let link = document.createElement('a');
  //link.download = 'example.png';

  link.href = window.URL.createObjectURL(blob);
  link.click();
    console.log(link.href)
document.getElementById('test').innerHTML = link;
  // delete the internal blob reference, to let the browser clear memory from it
  URL.revokeObjectURL(link.href);
}, 'image/png');




