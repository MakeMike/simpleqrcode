function makeQr() {
    if(document.getElementById("link").value==="https://www.youtube.com/watch?v=dQw4w9WgXcQ"){
        alert("You sneaky little sneak!")
    }
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: document.getElementById("link").value,
        width: 128,
        height: 128,
        colorDark : document.getElementById("cselect").value,
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
    
}

