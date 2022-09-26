const sendForm = document.querySelector("#btn-enviar-datos");
sendForm.addEventListener("click", message, false);

function message(event) {
    const text = "Petición enviada correctamente.";
    alert(text);
    event.preventDefault();
}
