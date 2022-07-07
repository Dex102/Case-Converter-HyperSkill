let saveFile = document.getElementById("save-text-file");

function upperCase() {
    let upperText = document.getElementById("textarea").value;
    document.getElementById("textarea").value = upperText.toUpperCase();
}

function lowerCase() {
    let lowerText = document.getElementById("textarea").value;
    document.getElementById("textarea").value = lowerText.toLowerCase();
}

function properCase() {
    let properText = document.getElementById("textarea").value;
    let splitArray  = properText.split(" ");
    for (let i = 0; i < splitArray.length; i++) {
    splitArray[i] = splitArray[i].slice(0,1).toUpperCase()
    + splitArray[i].slice(1);
}
    document.getElementById("textarea").value = splitArray.join(" ");
}

function sentenceCase() {
    let sentenceText = document.getElementById("textarea").value;
    let splitArray  = sentenceText.toLowerCase().split(". ");
    for (let i = 0; i < splitArray.length; i++) {
    splitArray[i] = splitArray[i].slice(0,1).toUpperCase()
    + splitArray[i].slice(1);
}
    document.getElementById("textarea").value = splitArray.join(". ");
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

saveFile.addEventListener("click", function () {
    download("text.txt", document.getElementById("textarea").value);
})
