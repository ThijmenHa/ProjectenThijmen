function Loopfunctie(a) {
    const tgetal = document.getElementById("tgetal").value;
    for (let i=0; i<=10; i++)
    {
        document.getElementById("output").innerHTML += i + "x" + tgetal + "=" + i * tgetal + "<br>"
    }
    if(a = 1){
        document.getElementById("output").style.display = "block";
    }
}