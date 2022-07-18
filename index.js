function dateSet() {

    // Hides main display and replaces with new one
    document.getElementById('display').style.display = 'none'
    document.getElementById('display-block-set').style.display = 'block'

    // Grabs full time and date from users computer
    let d = new Date()
    console.log(d)

    // Grabs hours from html option
    const hours = document.getElementById("hours").options[document.getElementById("hours").selectedIndex].text
    d.setHours(hours)

    // Grabs minutes from html option
    const minutes = document.getElementById("minutes").options[document.getElementById("minutes").selectedIndex].text
    d.setMinutes(minutes)

    // Grabs meridiem from html option
    const meridiem = document.getElementById("meridiem").options[document.getElementById("meridiem").selectedIndex].text
    if (meridiem === "PM") {
        d.setHours(d.getHours() + 12)
    }

    // Prints time
    console.log(d)
    const body = document.getElementById("print-set-results")
    const timeSetText = document.createElement("h1")
    timeSetText.textContent = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    body.append(timeSetText)
    timeSetText.classList.add("result-container")

    // New div to seperate info
    const div = document.createElement("div")
    body.append(div)

    // Adds text to let user know the times below are to sleep
    const sleepText = document.createElement("h1")
    sleepText.textContent = "You should sleep at these following times"
    body.append(sleepText)

    // Displays math results for when user should sleep
    // Subtracts 90 minutes, 6 times
    for (let i = 0; i < 6; i++) {
        d.setMinutes(d.getMinutes() - 90);
        console.log(
            d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
        );
        const resultTime = document.createElement("h1")
        resultTime.textContent = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        body.append(resultTime)
        resultTime.classList.add("result-container")
    }

    // New div to seperate info
    const div1 = document.createElement("div")
    body.append(div1)

    // Adds disclaimer text
    const cycles = document.createElement("h2")
    cycles.textContent = ("It's best to get 5-6 sleep cycles.")
    body.append(cycles)
    

    // Creates Go Home button
    const button = document.createElement("button")
    button.textContent = "Go Home"
    body.append(button)
    button.classList.add("go-home", "btn-text")
    button.id = "go-home"

    document.getElementById("go-home").onclick = function () {
        window.location.reload()
    }
}

function dateNow() {

    // Hides main display and replaces with new one
    document.getElementById('display').style.display = 'none'
    document.getElementById('display-block-now').style.display = 'block'

    // Grabs full time and date from users computer
    let d = new Date()
    console.log(d)

    // Adds 15 minutes
    d.setMinutes(d.getMinutes() + 15);
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

    // Prints 15 minutes disclaimer
    const body = document.getElementById("print-now-results")
    const h2 = document.createElement("h2")
    h2.textContent = "(The average time to fall asleep is 15 minutes)"
    body.append(h2)

    // Creates Go Home button
    const button = document.createElement("button")
    button.textContent = "Go Home"
    body.append(button)
    button.classList.add("go-home", "btn-text")
    button.id = "go-home"

    document.getElementById("go-home").onclick = function () {
        window.location.reload()
    }

}

