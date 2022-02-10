let upper = document.getElementById("upper-case");
upper.addEventListener("click", function () {
    let text = document.getElementById("text-area").value;
    document.getElementById("text-area").value = text.toUpperCase();
});

let lower = document.getElementById("lower-case");
lower.addEventListener("click", function () {
    let text = document.getElementById("text-area").value;
    document.getElementById("text-area").value = text.toLowerCase();
});

let proper = document.getElementById("proper-case");
proper.addEventListener("click", function () {
    let text = document.getElementById("text-area").value;
    let array = text.split(" ");
    document.getElementById("text-area").value = loop(array).join(" ");
});

let sentence = document.getElementById("sentence-case");
sentence.addEventListener("click", function () {
    let text = document.getElementById("text-area").value;
    let array = text.split(". ");
    document.getElementById("text-area").value = loop(array).join(". ");
});

function loop(array) {
    for (let index = 0; index < array.length; index++) {
        array[index] = array[index].toLowerCase();
        let capital = array[index].slice(0, 1)
        capital = capital.toUpperCase();
        array[index] = capital + array[index].slice(1, array[index].length);
    }
    return array;
}

let save = document.getElementById("save-text-file");
save.addEventListener("click", function () {
    let text = document.getElementById("text-area").value;
    download("file.txt", text);
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}