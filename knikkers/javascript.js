function berekenen() {
    const knikkers = document.getElementById("aantalknikkers").value;
    const aantal = 10 - knikkers;
    
    console.log("u heeft " + knikkers + " ingevuld")
    if( knikkers >= 11 ) {
    document.getElementById("outputveld").innerHTML = "U heeft maar 10 knikkers! Vul een kleiner getal in."
    }
   
    else if( knikkers == 10) {
    document.getElementById("outputveld").innerHTML = "U heeft al uw knikkers opgegooid! Er zitten geen knikkers meer in het zakje."
    }

    else if( knikkers <= 0){
    document.getElementById("outputveld").innerHTML = "U kunt niet 0 of minder dan 0 knikkers opgooien..."
    }
    
    else { 
    document.getElementById("outputveld").innerHTML = "U heeft " + knikkers + " knikkers opgegooid, u hebt nog " + aantal + " knikkers in uw zakje zitten"
    } 
}