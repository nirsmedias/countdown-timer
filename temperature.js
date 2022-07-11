document.getElementById("submitbtn").onclick = function() {
    let temp;

    if (document.getElementById("cbutton").checked) {
        temp = document.getElementById("textbox").value;
        temp = Number(temp);
        temp = tocelsius(temp);
        document.getElementById("templabel").innerHTML = temp + "°C";
    } else if (document.getElementById("fbutton").checked) {
        temp = document.getElementById("textbox").value;
        temp = Number(temp);
        temp = tofahrenheit(temp);
        document.getElementById("templabel").innerHTML = temp + "°F";
    } else {
        document.getElementById("templabel").innerHTML = "select a unit";
    }
}

let temp = 32;
temp = tofahrenheit(temp);
console.log(temp);

function tocelsius(temp) {
    return (temp - 32) * (5/9);
}

function tofahrenheit(temp) {
    return temp * 9 / 5 + 32;
}