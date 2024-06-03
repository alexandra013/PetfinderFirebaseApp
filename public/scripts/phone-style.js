function switchStylesheet() {
    const mainStylesheet = document.getElementById('style');
    const smallScreenStylesheet = document.getElementById('phone-style');
    
    if (window.innerWidth <= 480) {
        mainStylesheet.disabled = true;
        smallScreenStylesheet.disabled = false;
    } else {
        mainStylesheet.disabled = false;
        smallScreenStylesheet.disabled = true;
    }
}


window.addEventListener('resize', switchStylesheet);
window.addEventListener('DOMContentLoaded', switchStylesheet);
