document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});

document.onkeydown = function(e) {
    if (event.keyCode == 123) {
        return false;
    }

    if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
        return false;
    }
    const texts = [
"✨ Welcome to Maulana STORe",
"📦 Open Panel Bot WhatsApp & Telegram",
"🤖 Open Sewa Bot WhatsApp",
"📱 Open Nokos All Aplikasi"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type(){
    if(count === texts.length){
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length){
        count++;
        index = 0;
        setTimeout(type,1500);
    }else{
        setTimeout(type,40);
    }
}

type();
};
