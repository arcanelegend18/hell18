const bodyId = document.body.id;
if (bodyId === 'body') {
    function validate() {
        const x = document.getElementById("pswd").value;
        const y = document.getElementById("cnfrm").value;
        const z = document.getElementById("errormsg");
        z.textContent = '';
        if (x != y) {
            alert("password confirm crt ga chey puka");
            return false;
        }
        if (x.length < 8) {
            z.textContent = 'Password must be at least 8 characters long.';
            return false;
        }
        return true;
    }
    const dark = document.getElementById("button1");
    dark.addEventListener("click", darkmode);
    function darkmode() {
        const bodyElement = document.getElementById("body");
        const container = document.getElementById("container");

        if (bodyElement.style.backgroundImage == "url('spiders.jpg')" || bodyElement.style.backgroundColor == "white") {
            dark.textContent = "light mode";
            bodyElement.style.backgroundImage = "";
            bodyElement.style.backgroundColor = "black";
            container.style.boxShadow = "15px 10px 25px rgba(182, 179, 179, 0.755)";
        } else {
            dark.textContent = "dark mode";
            bodyElement.style.backgroundImage = "url('spiders.jpg')";
            bodyElement.style.backgroundColor = "white";
            container.style.boxShadow = "15px 10px 25px aliceblue";
        }
    }

} else if (bodyId === '2page') {
    const doc = document.getElementById("nig").textContent;
    console.log(doc);
}
