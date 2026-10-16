
const formulaire = document.getElementById("formAdoption");
const confirmation = document.getElementById("confirmation");
formulaire.addEventListener("submit", function (event) {
    event.preventDefault();
    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const telephone = document.getElementById("telephone").value.trim();
    const animal = document.getElementById("animal").value;
    const logement = document.getElementById("logement").value;
    const acceptation = document.getElementById("acceptation").checked;

    const erreurNom = document.getElementById("erreur-nom");
    const erreurEmail = document.getElementById("erreur-email");
    const erreurTelephone = document.getElementById("erreur-telephone");
    const erreurAnimal = document.getElementById("erreur-animal");
    const erreurLogement = document.getElementById("erreur-logement");
    const erreurAcceptation = document.getElementById("erreur-acceptation");

    erreurNom.textContent = "";
    erreurEmail.textContent = "";
    erreurTelephone.textContent = "";
    erreurAnimal.textContent = "";
    erreurLogement.textContent = "";
    erreurAcceptation.textContent = "";
    confirmation.textContent = "";

    let valide = true;
    if (nom === "") {
        erreurNom.textContent = "Le nom est obligatoire";
        valide = false;
    }
    const formatEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        erreurEmail.textContent = "L email est obligatoire";
        valide = false;
    } else if (!formatEmail.test(email)) {
        erreurEmail.textContent = "Veuillez saisir un e-mail valide";
        valide = false;
    }
    const formatTelephone = /^(?:(?:\+212|00212)|0)([5-7]\d{8})$/;
    const telephoneNettoye = telephone.replace(/[\s.-]/g, "");
    if (telephone === "") {
        erreurTelephone.textContent = "Le téléphone est obligatoire ";
        valide = false;
    } else if (!formatTelephone.test(telephoneNettoye)) {
        erreurTelephone.textContent = "Saisissez un numéro marocain valide";
        valide = false;
    }
    if (animal === "") {
        erreurAnimal.textContent = "Veuillez choisir un animal";
        valide = false;
    }
    if (logement === "") {
        erreurLogement.textContent = "Veuillez choisir votre logement";
        valide = false;
    }
    if (!acceptation) {
        erreurAcceptation.textContent ="Veuillez accepter d'etre recontacte(e).";
        valide = false;
    }
    if (valide) {
        confirmation.textContent ="Merci " + nom +"  Votre demande d'adoption pour " + animal + " a ete validee";
        formulaire.reset();
    }
});
