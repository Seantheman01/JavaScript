let loggedIn = ["Sean"];

function handleLogin(){
    console.log(loggedIn)
    let naam = document.getElementById("inputNaam").value;
    console.log("U hebt op de knop geklikt!");
    if (loggedIn.includes(naam)){
        loggedIn.splice(loggedIn.indexOf(naam), 1)
        console.log("U bent uitgelogd: " + naam);
    }

    console.log(loggedIn)
    // console.log("U bent ingelogd: " + naam);
    // document.getElementById("inputNaam").value = "";
    // document.getElementById('melding').innerText = 'Gelukt!';
}

document.getElementById("inlogButton").onclick = handleLogin;