function clickAndToggle() {
    if (document.getElementById('modal-box')) {
        if (document.getElementById('modal-box').style.display == 'none') {
            document.getElementById('modal-box').style.display = 'block'
        }
    }
}

window.onmousedown = () => {
    if (document.getElementById('modal-box')) {
        if (document.getElementById('modal-box').style.display == 'block') {
            document.getElementById('modal-box').style.display = 'none'
        }
    }
}