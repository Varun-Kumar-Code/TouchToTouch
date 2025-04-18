//Prevent righ click
document.oncontextmenu = () => {
    alert("Don't try right click")
    return false
}

document.onkeydown = e => {
    //Prevent F12 key
    if (e.key == "F12") {
        alert("Don't try to inspect element")
        return false
    }

    //Prevent showing page source by ctrl + U
    if (e.ctrlKey && e.key == "u") {
        alert("Don't try to view page sources")
        return false
    }
}
