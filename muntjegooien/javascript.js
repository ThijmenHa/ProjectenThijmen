function muntjegooien() {
    let uitkomst = (Math.random() >= 0.5 ? "Heads!" : "Tails!")
    document.getElementById("outputveld").innerHTML = uitkomst
    console.log(uitkomst)
}