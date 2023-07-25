function onblurtest() {
    console.log("De onblur werkt!")
}

function onkeyupevent() {
    const waarde = document.getElementById("leeftijd").value;
    const length = waarde.length;
    document.getElementById("outputdiv").innerHTML = waarde + "<br>" + length
}       