document.oncontextmenu = () => {
    alert("Don't try right click")
    return false
}

document.onkeydown = e => {
    if(e.key == "F12"){
        alert("Don't try to inspect element")
        return false
    }

    if(e.ctrlKey && e.key == "u") {
        alert("Don't try to view page sources")
        return false
    }
}