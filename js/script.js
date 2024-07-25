document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('Obrigado por entrar em contato, ' + name + '! Nós responderemos em breve.');
        document.getElementById('contact-form').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const pickupAddress = document.getElementById("pickup-address").value;
    const deliveryAddress = document.getElementById("delivery-address").value;
    const date = document.getElementById("date").value;
    const typeOfCargo = document.getElementById("type-of-cargo").value;
    const message = document.getElementById("message").value;

    if (name && email && phone && pickupAddress && deliveryAddress && date && typeOfCargo && message) {
        // Enviar formulário
        alert("Formulário enviado com sucesso!");
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
