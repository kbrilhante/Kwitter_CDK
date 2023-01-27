// configurações do FB
const firebaseConfig = {
    apiKey: "AIzaSyDNiu9VLhZb32SE2MKPiBixV3PCFfAU9Uo",
    authDomain: "chetdouol.firebaseapp.com",
    databaseURL: "https://chetdouol-default-rtdb.firebaseio.com",
    projectId: "chetdouol",
    storageBucket: "chetdouol.appspot.com",
    messagingSenderId: "478622966963",
    appId: "1:478622966963:web:7ec0467d8fcecd88423cc6"
};

// inicializa FB
firebase.initializeApp(firebaseConfig);

const nomeUsuario = localStorage.getItem("nomeUsuario");

document.getElementById("nomeUsuario").textContent = "Olá, " + nomeUsuario + "!";

getData();

function addSala() {
    const sala = document.getElementById("nomeSala").value;
    if (sala) {
        firebase.database().ref("/").child(sala).set({
            purpose: "sala criada"
        });
        loadRoom(sala);
    }
}

function loadRoom(room) {
    localStorage.setItem("nomeSala", room);
    location = "chat.html";
}

function getData() {
    firebase.database().ref("/").on("value", snapshot => {
        let salas = [];
        console.log("Keys Changed");
        snapshot.forEach(childSnapshot => {
            const childKey = childSnapshot.key;
            let row = "<div class='nomeSala' id='";
            row += childKey;
            row += "' onclick='loadRoom(this.id)'>#";
            row += childKey + "</div>"
            salas.push(row);
        });
        document.getElementById("output").innerHTML = salas.join("");
    });
}