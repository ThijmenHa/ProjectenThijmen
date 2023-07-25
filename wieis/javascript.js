function randomnummer1() {
    const randomnummer1 = Math.floor(Math.random()* 10)
    const randomnummer2 = Math.floor(Math.random()* 10)
    document.getElementById("outputveldje").innerHTML = "score speler 1" + "<br>" + randomnummer1 + "<br>" + "score speler 2" + "<br>" + randomnummer2 
    if(randomnummer1 >= randomnummer2) {
        document.getElementById("uitkomst").innerHTML = "speler 1 heeft gewonnen!"
    }
    else {
        document.getElementById("uitkomst").innerHTML = "speler 2 heeft gewonnen!"
    }
}