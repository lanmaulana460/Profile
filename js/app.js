// Disable klik kanan
document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});

// Disable beberapa shortcut inspect
document.addEventListener("keydown", (e) => {

    if (e.key === "F12") {
        e.preventDefault();
    }

    if (e.ctrlKey && e.shiftKey && e.key === "I") {
        e.preventDefault();
    }

    if (e.ctrlKey && e.shiftKey && e.key === "C") {
        e.preventDefault();
    }

    if (e.ctrlKey && e.shiftKey && e.key === "J") {
        e.preventDefault();
    }

    if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
    }

});


// Typing Text
const texts = [
"✦ 𝗠𝗔𝗨𝗟𝗔𝗡𝗔 𝗦𝗧𝗢𝗥𝗘 ✦",
"𝗢𝗣𝗘𝗡 𝗣𝗔𝗡𝗘𝗟 𝗕𝗢𝗧 𝗪𝗔 & 𝗧𝗘𝗟",
"𝗢𝗣𝗘𝗡 𝗦𝗘𝗪𝗔 𝗕𝗢𝗧 𝗪𝗔",
"𝗢𝗣𝗘𝗡 𝗡𝗢𝗞𝗢𝗦 • 𝗔𝗟𝗟 𝗔𝗣𝗟𝗜𝗞𝗔𝗦𝗜"
];

let count = 0;
let index = 0;

function type(){
    if(count >= texts.length){
        count = 0;
    }

    const currentText = texts[count];
    const letter = currentText.slice(0, ++index);

    const typingEl = document.getElementById("typing");
    if (typingEl) {
        typingEl.textContent = letter;
    }

    if(letter.length === currentText.length){
        count++;
        index = 0;
        setTimeout(type,1500);
    } else {
        setTimeout(type,40);
    }
}

type();