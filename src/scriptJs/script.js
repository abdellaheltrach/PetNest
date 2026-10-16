const formulaire=document.getElementById("formAdoption");
formulaire.addEventListener("submit",function(event){
    event.preventDefault();
    const nom=document.getElementById("nom").value.trim();
    const email=document.getElementById("email").value.trim();
    const telephone=document.getElementById("telephone").value.trim();
    const animal=document.getElementById("animal").value;
    const logement=document.getElementById("logement").value;
    const acceptation=document.getElementById("acceptation").checked;


    const erreurNom=document.getElementById("erreur-nom");
    const erreurEmail=document.getElementById("erreur-email");
    const erreurTelephone=document.getElementById("erreur-telephone");
    const erreurAnimal=document.getElementById("erreur-animal");
    const erreurlogement=document.getElementById("erreur-logement");
    const erreurAcceptation=document.getElementById("erreur-acceptation");


    erreurNom.textContent="";
    erreurEmail.textContent="";
    erreurTelephone.textContent="";
    erreurAnimal.textContent="";
    erreurlogement.textContent="";
    erreurAcceptation.textContent="";
    confirmation.textContent="";

    let valide=true;
    if(nom===""){
        erreurNom.textContent="le nom est obligatoire";
        valide=false;
    }

    const formatEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email===""){
        erreurEmail.textContent="l email est obligatoire";
        valide=false;
    }else if(!formatEmail.test(email)){
        erreurEmail.textContent="veuillez saisir un e-mail valide";
        valide=false;
    }
    const formatTelephone=/^(?:(?:\+212|00212)|0)([5-7]\d{8})$/;
    const telephoneNettoyer=telephone.replace(/[\s.-]/g, "");

    if(telephone===""){
        erreurTelephone.textContent="le telephone est obligatoire";
        valide=false;
    }else if(!formatTelephone.test(telephoneNettoyer)){
        erreurTelephone.textContent="saisissez un numero marocain valide";
        valide=false;
    }

    if(animal===""){
        erreurAnimal.textContent="veuillez choisir un animal";
        valide=false;
    }
    if(logement===""){
        erreurlogement.textContent="veuillez choisir votre logement":
        valide=false;
    }

    if(valide){
        confirmation.textContent=
    }




    



})