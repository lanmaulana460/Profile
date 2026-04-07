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
};
    const texts = [
"✦ 𝗠𝗔𝗨𝗟𝗔𝗡𝗔 𝗦𝗧𝗢𝗥𝗘 ✦",
"⚡ 𝗢𝗣𝗘𝗡 𝗣𝗔𝗡𝗘𝗟 𝗕𝗢𝗧 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 & 𝗧𝗘𝗟𝗘𝗚𝗥𝗔𝗠",
"🤖 𝗢𝗣𝗘𝗡 𝗦𝗘𝗪𝗔 𝗕𝗢𝗧 𝗪𝗔",
"📱 𝗢𝗣𝗘𝗡 𝗡𝗢𝗞𝗢𝗦 • 𝗔𝗟𝗟 𝗔𝗣𝗟𝗜𝗞𝗔𝗦𝗜"
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
