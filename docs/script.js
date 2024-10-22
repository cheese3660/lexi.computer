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
// typer()


const contact_uri = "contact.html";
const about_uri = "about.html";
const projects_uri = "projects.html";
const support_uri = "support.html";

function fetch_and_write_uri(uri) {
    fetch(uri).then((response) => {
        response.text().then(function(text) {
            document.getElementById("rightPane").innerHTML = text
        })
    });
}

function refresh_window(hash) {
    switch (hash) {
        case "contact":
            fetch_and_write_uri(contact_uri);
            document.getElementById("contact").classList.add("selected-button");
            document.getElementById("about").classList.remove("selected-button");
            document.getElementById("projects").classList.remove("selected-button");
            document.getElementById("support").classList.remove("selected-button");
            break;
        case "projects":
            fetch_and_write_uri(projects_uri);
            document.getElementById("contact").classList.remove("selected-button");
            document.getElementById("about").classList.remove("selected-button");
            document.getElementById("projects").classList.add("selected-button");
            document.getElementById("support").classList.remove("selected-button");
            break;
        case "support":
            fetch_and_write_uri(support_uri);
            document.getElementById("contact").classList.remove("selected-button");
            document.getElementById("about").classList.remove("selected-button");
            document.getElementById("projects").classList.remove("selected-button");
            document.getElementById("support").classList.add("selected-button");
            break;
        case "about":
        default:
            document.getElementById("contact").classList.remove("selected-button");
            document.getElementById("about").classList.add("selected-button");
            document.getElementById("projects").classList.remove("selected-button");
            document.getElementById("support").classList.remove("selected-button");
            fetch_and_write_uri(about_uri);
            break;
    }
}
refresh_window(window.location.hash.slice(1));
document.getElementById("about").onclick = (event) => {
    refresh_window("about");
};
document.getElementById("contact").onclick = (event) => {
    refresh_window("contact");
};
document.getElementById("support").onclick = (event) => {
    refresh_window("support");
};
document.getElementById("projects").onclick = (event) => {
    refresh_window("projects");
};