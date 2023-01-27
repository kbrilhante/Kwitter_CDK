function addUsuario() {
    const nomeUsuario = document.getElementById("nomeUsuario").value;
    console.log(nomeUsuario);
    if(nomeUsuario) {
        localStorage.setItem("nomeUsuario", nomeUsuario);
        location = "sala.html";
    } else {
        document.getElementById("nomeUsuario").placeholder = "Digite um nome válido";
    }
}

function logout() {
    localStorage.removeItem("nomeUsuario");
    localStorage.removeItem("nomeSala");
    location = "index.html";
}