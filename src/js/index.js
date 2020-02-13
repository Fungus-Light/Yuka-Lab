document.oncontextmenu = function (e) {
    var e = e || window.event;
    e.returnValue = false;
    return false;
}
//屏蔽ctrl+s 保存
window.onkeydown = function (e) {
    if (e.ctrlKey && e.keyCode == 83) {
        //alert('禁止使用ctrl+s');
        e.preventDefault();
        e.returnValue = false;
        return false;
    }
    if (e.ctrlKey && e.keyCode == 80) {
        //alert('禁止使用ctrl+p');
        e.preventDefault();
        e.returnValue = false;
        return false;
    }
}

this.editor = ace.edit('editor');
this.editor.setTheme("ace/theme/dracula");
let jsMode = ace.require('ace/mode/javascript').Mode;
this.editor.session.setMode(new jsMode());
editor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
});

editor.setValue("//write code here and press ctrl + enter to run", 1);

document.onkeydown = (e) => {
    if (e.ctrlKey && e.keyCode == 13) {
        executeScript();
    }
}

var canvas;

function setup() {
    canvas = createCanvas(windowWidth / 2, windowHeight);
    canvas.parent('canvasPos');
    frameRate(60);
    background(0);
}

function windowResized() {
    resizeCanvas(windowWidth / 2, windowHeight, false);
    executeScript();
}

function executeScript() {
    if (document.getElementById("dynamicScript")) {
        let s = document.getElementById("dynamicScript");
        s.parentNode.removeChild(s);
    }
    if(canvas){
        canvas.clear();
        background(0);
    }
    let code = editor.getValue();
    console.log(code);
    let script = document.createElement('script');
    script.type = "text/javascript";
    script.appendChild(document.createTextNode(code));
    script.id = "dynamicScript";
    document.body.appendChild(script);
}

executeScript();