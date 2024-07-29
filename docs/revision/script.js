let typeLog = ""

const typer = async () => {
    console.log("ran!!!")
    for (const char of typeLog.split("")) {
        console.log(char)
        if (char === "¤") {
            document.getElementById("rightPane").innerHTML += "<br />"
        } else {
            document.getElementById("rightPane").innerHTML += char
        }
        await new Promise(r => setTimeout(r, 50));
    }
}

typeLog = `I'm gay ✨`
typer()