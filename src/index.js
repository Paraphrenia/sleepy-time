function dateSet() {

    document.getElementById('display').style.display = 'none'
    document.getElementById('display-block-set').style.display = 'block'

    // Grabs full time and date from users computer
    let d = new Date()
    console.log(d)


    // Adds 14 minutes
    d.setMinutes(d.getMinutes() + 14);
    console.log(d)

}

function dateNow() {

    document.getElementById('display').style.display = 'none'
    document.getElementById('display-block-now').style.display = 'block'

    // Grabs full time and date from users computer
    let d = new Date()
    console.log(d)

    // Adds 14 minutes
    d.setMinutes(d.getMinutes() + 14);
    console.log(d)

    // Adds 90 minutes, 6 times
    for (let i = 0; i < 6; i++) {
        d.setMinutes(d.getMinutes() + 90);
        console.log(
            d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
        );
        const body = document.getElementById("print-now-results")
        const h1 = document.createElement("h1")
        h1.textContent = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        body.append(h1)
        h1.classList.add("result-container")
    }

    const body = document.getElementById("print-now-results")
    const h1 = document.createElement("h1")
    h1.textContent = "It's best to get 5-6 cycles of sleep"
    body.append(h1)

    const button = document.createElement("button")
    button.textContent = "Go Home"
    body.append(button)
    button.classList.add("btn-1", "btn-text")
}


button.onclick = window.location.reload()
