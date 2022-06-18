function dateGrabber() {

    // Grabs full time and date from users computer
    let d = new Date()
    console.log(d)

    // Adds 14 minutes
    d.setMinutes(d.getMinutes() + 14);
    console.log(d)

    // Adds 90 minutes, 6 times
    for (let i = 0; i < 6; i++) {
    d.setMinutes(d.getMinutes() + 90);
    console.log(d)
    }
}