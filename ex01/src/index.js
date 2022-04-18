let keyboard = document.getElementById("name");

let btn1 = document.getElementById("1");
let btn2 = document.getElementById("2");
let btn3 = document.getElementById("3");
let btn4 = document.getElementById("4");
let btn5 = document.getElementById("5");
let btn6 = document.getElementById("6");
let btn7 = document.getElementById("7");
let btn8 = document.getElementById("8");
let btn9 = document.getElementById("9");
let btn0 = document.getElementById("0");
let btnClear = document.getElementById("backspace");
let btnspace = document.getElementById("spacebar");
let btnenter = document.getElementById("enter");
let btnSubmit = document.getElementById("submit");


let tempTxt = "";

//capslock
//let btnCapsLock = document.querySelector("capslock").addEventListener('mousedown', checkCapsLock);
let capslock = document.getElementById("capslock");

//
let btnQ = document.getElementById("q");
let btnW = document.getElementById("w");
let btnE = document.getElementById("e");
let btnR = document.getElementById("r");
let btnT = document.getElementById("t");
let btnY = document.getElementById("y");
let btnU = document.getElementById("u");
let btnI = document.getElementById("i");
let btnO = document.getElementById("o");
let btnP = document.getElementById("p");


let btnA = document.getElementById("a");
let btnS = document.getElementById("s");
let btnD = document.getElementById("d");
let btnF = document.getElementById("f");
let btnG = document.getElementById("g");
let btnH = document.getElementById("h");
let btnJ = document.getElementById("j");
let btnK = document.getElementById("k");
let btnL = document.getElementById("l");


let btnZ = document.getElementById("z");
let btnX = document.getElementById("x");
let btnC = document.getElementById("c");
let btnV = document.getElementById("v");
let btnB = document.getElementById("b");
let btnN = document.getElementById("n");
let btnM = document.getElementById("m");
let btnCOMA = document.getElementById(",key");
let btnPUNT = document.getElementById(".key");

const btn1F = () => {
    keyboard.innerHTML = tempTxt + "1";
    tempTxt = tempTxt + "1";
    
};
const btn2F = () => {
    keyboard.innerHTML = tempTxt + "2";
    tempTxt = tempTxt + "2";
};
const btn3F = () => {
    keyboard.innerHTML = tempTxt + "3";
    tempTxt = tempTxt + "3";
};
const btn4F = () => {
    keyboard.innerHTML = tempTxt + "4";
    tempTxt = tempTxt + "4";
};
const btn5F = () => {
    keyboard.innerHTML = tempTxt + "5";
    tempTxt = tempTxt + "5";
};
const btn6F = () => {
    keyboard.innerHTML = tempTxt + "6";
    tempTxt = tempTxt + "6";
};
const btn7F = () => {
    keyboard.innerHTML = tempTxt + "7";
    tempTxt = tempTxt + "7";
};
const btn8F = () => {
    keyboard.innerHTML = tempTxt + "8";
    tempTxt = tempTxt + "8";
};
const btn9F = () => {
    keyboard.innerHTML = tempTxt + "9";
    tempTxt = tempTxt + "9";
};
const btn0F = () => {
    keyboard.innerHTML = tempTxt + "0";
    tempTxt = tempTxt + "0";
};
const btnClearF = () => {
    
    keyboard.innerHTML  = tempTxt.substring(0, keyboard.innerHTML.length - 1);
   tempTxt = tempTxt.substring(0, keyboard.innerHTML.length);
};
const btnSpace = () => {

    keyboard.innerHTML = tempTxt + " ";
    tempTxt = tempTxt + " ";
    
}

const btnEnter = () => {

    keyboard.innerHTML  = tempTxt + "\n";
    tempTxt = tempTxt + "\n";
}

const btnAlert = () => {

    console.log(tempTxt);
    alert(`${tempTxt}`)
}
// letters



 const btnQf = () => {
    
    keyboard.innerHTML = tempTxt + "q";
    tempTxt = tempTxt + "q";

}; 
const btnWf = () => {
    keyboard.innerHTML = tempTxt + "w";
    tempTxt = tempTxt + "w";
};
const btnEf = () => {
    keyboard.innerHTML = tempTxt + "e";
    tempTxt = tempTxt + "e";
};
const btnRf = () => {
    keyboard.innerHTML = tempTxt + "r";
    tempTxt = tempTxt + "r";
};
const btnTf = () => {
    keyboard.innerHTML = tempTxt + "t";
    tempTxt = tempTxt + "t";
};
const btnYf = () => {
    keyboard.innerHTML = tempTxt + "y";
    tempTxt = tempTxt + "y";
};
const btnUf = () => {
    keyboard.innerHTML = tempTxt + "u";
    tempTxt = tempTxt + "u";
};
const btnIf = () => {
    keyboard.innerHTML = tempTxt + "i";
    tempTxt = tempTxt + "i";
};
const btnOf = () => {
    keyboard.innerHTML = tempTxt + "o";
    tempTxt = tempTxt + "o";
};
const btnPf = () => {
    keyboard.innerHTML = tempTxt + "p";
    tempTxt = tempTxt + "p";
};

const btncapslockF = () => {
    keyboard.innerHTML = tempTxt.toUpperCase();
    tempTxt = tempTxt.toUpperCase();
}

btncapslockF.click = () => {

    btncapslockF();
}

// second row
const btnAf = () => {
    keyboard.innerHTML = tempTxt + "a";
    tempTxt = tempTxt + "a";
};
const btnSf = () => {
    keyboard.innerHTML = tempTxt + "s";
    tempTxt = tempTxt + "s";
};
const btnDf = () => {
    keyboard.innerHTML = tempTxt + "d";
    tempTxt = tempTxt + "d";
};
const btnFf = () => {
    keyboard.innerHTML = tempTxt + "f";
    tempTxt = tempTxt + "f";
};
const btnGf = () => {
    keyboard.innerHTML = tempTxt + "g";
    tempTxt = tempTxt + "g";
};
const btnHf = () => {
    keyboard.innerHTML = tempTxt + "h";
    tempTxt = tempTxt + "h";
};
const btnJf = () => {
    keyboard.innerHTML = tempTxt + "j";
    tempTxt = tempTxt + "j";
};
const btnKf = () => {
    keyboard.innerHTML = tempTxt + "k";
    tempTxt = tempTxt + "k";
};
const btnLf = () => {
    keyboard.innerHTML = tempTxt + "l";
    tempTxt = tempTxt + "l";
};
// third row


const btnZf = () => {
    keyboard.innerHTML = tempTxt + "z";
    tempTxt = tempTxt + "z";
};
const btnXf = () => {
    keyboard.innerHTML = tempTxt + "x";
    tempTxt = tempTxt + "x";
};
const btnCf = () => {
    keyboard.innerHTML = tempTxt + "c";
    tempTxt = tempTxt + "c";
};
const btnVf = () => {
    keyboard.innerHTML = tempTxt + "v";
    tempTxt = tempTxt + "v";
};
const btnBf = () => {
    keyboard.innerHTML = tempTxt + "b";
    tempTxt = tempTxt + "b";
};
const btnNf = () => {
    keyboard.innerHTML = tempTxt + "n";
    tempTxt = tempTxt + "n";
};
const btnMf = () => {
    keyboard.innerHTML = tempTxt + "m";
    tempTxt = tempTxt + "m";
};
const btnKOMAf = () => {
    keyboard.innerHTML = tempTxt + ",";
    tempTxt = tempTxt + ",";
};
const btnPUNTf = () => {
    keyboard.innerHTML = tempTxt + ".";
    tempTxt = tempTxt + ".";
};
//
btn1.onclick = function () {
    btn1F();
};
btn2.onclick = function () {
    btn2F();
};
btn3.onclick = function () {
    btn3F();
};
btn4.onclick = function () {
    btn4F();
};
btn5.onclick = function () {
    btn5F();
};
btn6.onclick = function () {
    btn6F();
};
btn7.onclick = function () {
    btn7F();
};
btn8.onclick = function () {
    btn8F();
};
btn9.onclick = function () {
    btn9F();
};
btn0.onclick = function () {
    btn0F();
}
btnClear.onclick = function () {
    btnClearF();
};

btnspace.onclick = function () {

    btnSpace();
}
btnenter.onclick= function () {

    btnEnter();
}

btnSubmit.onclick= function () {

    btnAlert();
}

//first row

btnQ.onclick = function () {
    btnQf();
};
btnW.onclick = function () {
    btnWf();
};
btnE.onclick = function () {
    btnEf();
};
btnR.onclick = function () {
    btnRf();
};
btnT.onclick = function () {
    btnTf();
};
btnY.onclick = function () {
    btnYf();
};
btnU.onclick = function () {
    btnUf();
};
btnI.onclick = function () {
    btnIf();
};
btnO.onclick = function () {
    btnOf();
};
btnP.onclick = function () {
    btnPf();
};


//second row
btnA.onclick = function () {
    btnAf();
};
btnS.onclick = function () {
    btnSf();
};
btnD.onclick = function () {
    btnDf();
};
btnF.onclick = function () {
    btnFf();
};
btnG.onclick = function () {
    btnGf();
};
btnH.onclick = function () {
    btnHf();
};
btnJ.onclick = function () {
    btnJf();
};
btnK.onclick = function () {
    btnKf();
};
btnL.onclick = function () {
    btnLf();
};

// third row

btnZ.onclick = function () {
    btnZf();
};
btnX.onclick = function () {
    btnXf();
};
btnC.onclick = function () {
    btnCf();
};
btnV.onclick = function () {
    btnVf();
};
btnB.onclick = function () {
    btnBf();
};
btnN.onclick = function () {
    btnNf();
};
btnM.onclick = function () {
    btnMf();
};
btnCOMA.onclick = function () {
    btnKOMAf();
};
btnPUNT.onclick = function () {
    btnPUNTf();
};
