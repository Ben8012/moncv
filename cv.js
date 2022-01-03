///-------------- CREATION DES BALISES -------------//
function createPF(){
    body = document.getElementById('body');
    nav = body.appendChild(document.createElement('nav'));
    nav.setAttribute('id','nav');
    div = body.appendChild(document.createElement('div'));
    div.setAttribute('id','div');
    seConnecter();
}


//// ----- CREATION DES 2 DIV (1 => TEXT, 2 => BOUTTONS)
function createDiv(){
    let div = document.getElementById("div");
    viderElement(div);
    div.setAttribute("class","container");

    let divText = div.appendChild(document.createElement("div"));
    divText.setAttribute("id","divText");
    divText.setAttribute("class","divText");

    let divButton = div.appendChild(document.createElement("div"));
    divButton.setAttribute("id",'divButton');
    divButton.setAttribute("class","divButton");
}

///------------CONNEXION-------------------///
function seConnecter(){
    createDiv()

    let form ="<form action='#' method='post' id='formConnexion'>"; 
    form +="<h3 class='formDiv'>Connexion</h3>";
    form += "<div class='formlogin'  id='email'><label>Email : </label><input type='email' name='email' value='"+monCV[0].valeur.email+"' ></div>";
    // 
    form += "<div class='formlogin'  id='passwd'><label>Mot de passe : </label> <input type='password' name='passwd'  value='"+monCV[8].valeur[0].password+"'></div>";
    // 
    form += "</form>"
    divText.innerHTML = form;
    let button = divButton.appendChild(document.createElement('button'));
    button.setAttribute('class','bouttonModifier');
    button.appendChild(document.createTextNode('Connexion'));
    formConnexion = document.getElementById("formConnexion");
    button.onclick = function() {
        formModifier = document.getElementById("formModifier");
        connection(formConnexion);
    };
 
    let button2 = divButton.appendChild(document.createElement('button'));
    button2.setAttribute('class','bouttonModifier');
    button2.setAttribute('id','voir');
    button2.appendChild(document.createTextNode('voir :)'));
    button2.onclick = function(){
        alert("L'Email : 'ben@mail.com' \rLe mot de passe : 'test1234=' \rMais chuut .... !!");
    }       
}


///----- VERIFICATION EMAIL ET MOT DE PASSE ----------///
function connection(form){
    (form.email.value == monCV[0].valeur.email && form.passwd.value == monCV[8].valeur[0].password) ?
        afficherNav():
        (form.email.value == monCV[0].valeur.email && form.passwd.value != monCV[8].valeur[0].password ) ? 
            passwdInvalide():
            (form.email.value != monCV[0].valeur.email && form.passwd.value == monCV[8].valeur[0].password) ?
                emailInvalide():
                (emailInvalide()+passwdInvalide());
}

function emailInvalide(){
    let div = document.getElementById("email");
    p = div.appendChild(document.createElement("p"));
    p.setAttribute('class','inputErreur');
    p.appendChild(document.createTextNode('Votre email est invalide !!'));
}

function passwdInvalide(){
    let div = document.getElementById("passwd");
    p = div.appendChild(document.createElement("p"));
    p.setAttribute('class','inputErreur');
    p.appendChild(document.createTextNode('Votre mot de passe est invalide !!'));
}

///------- AFFICHAGE BARRE DE NAVIGATION + CREATION D'OBJET LORS DU CLICK CORRESPONDANT AU TITRE ----------------///
function afficherNav(){
    var nav = document.getElementById("nav");
    nav.setAttribute("class","navbar");

    for (var item of monCV) {
        var button = nav.appendChild(document.createElement("button"));
        button.appendChild(document.createTextNode(item.titre));
        // envoyer l'objet courant dans le bouton dédié;
        button.item = item;
        button.onclick = function() {afficherElement(this.item);};
    }
    afficherElement(monCV[0]);
}

///----------FONCTION POUR VIDER L'INTERIEUR D'UNE BALISE ---------///
function viderElement(element){
    while (element.firstChild) element.removeChild(element.firstChild);
}


///-----------LES BOUTTONS-----------------///
function bouttonModifier(item){
    let div = document.getElementById("divButton");
    let button =  div.appendChild(document.createElement("button"));
    button.setAttribute("class","bouttonModifier")
    button.appendChild(document.createTextNode("Modifier "+item.titre))
    button.onclick = function(){ modifier(item);}
}

function bouttonValider(titre){
    let div = document.getElementById("divButton");
    // div.setAttribute("class","container");
    let button = div.appendChild(document.createElement("button"));
    button.titre = titre;
    button.setAttribute("class","bouttonModifier");
    button.appendChild(document.createTextNode("Valider"));
    button.onclick = function(){
        formModifier = document.getElementById("formModifier");
        valider(this.titre,formModifier);
    }
}

function bouttonAjouter(item){
    let div = document.getElementById("divButton");
    let button =  div.appendChild(document.createElement("button"));
    button.setAttribute("class","bouttonModifier")
    button.appendChild(document.createTextNode("Ajouter "+item.titre))
    button.onclick = function(){ ajouter(item);}
}

function bouttonValiderAjout(titre){
    let div = document.getElementById("divButton");
    // div.setAttribute("class","container");
    let button =  div.appendChild(document.createElement("button"));
    button.titre = titre;
    button.setAttribute("class","bouttonModifier")
    button.appendChild(document.createTextNode("Valider"));
    button.onclick = function(){ 
        formModifier = document.getElementById("formModifier");
        validerAjout(this.titre,formModifier);
    }
}

function bouttonValiderUnAjout(titre,item){
    let div = document.getElementById("divButton");
    // div.setAttribute("class","container");
    let button = div.appendChild(document.createElement("button"));
    button.titre = titre;
    button.setAttribute("class","bouttonModifier");
    button.appendChild(document.createTextNode("Valider"));
    button.onclick = function(){
        formModifier = document.getElementById("formModifier");
        
        validerUnAjout(this.titre,formModifier,item);
    }
}


///--- Supprimer un element ------///

function supprimerElement(titre,i,j){
    console.log(i);
    console.log(titre);
    let item;
    if(titre == "Coordonnnees"){
        monCV[0].valeur.splice(i,1);
        item = monCV[0];
    }
    else if(titre == "Formations"){
        monCV[1].valeur.splice(i,1);
        item = monCV[1];
    }  
    else if(titre == "Competences"){
        if(j == undefined){
            monCV[2].valeur.splice(i,1);
        }
        else{
            monCV[2].valeur[i].type.splice(j,1);
        }
        item = monCV[2];
    }
    else if(titre == "Experiences"){
        if(j == undefined){
            monCV[3].valeur.splice(i,1);
        }
        else{
            monCV[3].valeur[i].valeur.splice(j,1);
        }
        item = monCV[3];
    }
    else if(titre == "Langues"){
        monCV[4].valeur.splice(i,1);
        item = monCV[4];
    }
    else if(titre == "Loisirs"){
        monCV[5].valeur.splice(i,1);
        item = monCV[5];
    }
    else if(titre == "Titre"){
        monCV[6].valeur.splice(i,1);
        item = monCV[6];
    }
    else if(titre == "Déconnexion"){
        monCV[7].valeur.splice(i,1);
        item = monCV[7];
    }
    afficherElement(item);
}


///--------------AFFICHAGE CONTENU ---------------///
function afficherElement(item){
    createDiv();
    
    if(item.titre == "Coordonnnees"){
        divText.innerHTML = afficherCoordonnnees(item); 
    }
    else if(item.titre == "Formations"){
        divText.innerHTML = afficherFormations(item);
    }
    else if(item.titre == "Competences"){
        divText.innerHTML = afficherCompetences(item);
    }
    else if(item.titre == "Experiences"){
        divText.innerHTML = afficherExperiences(item);
    }
    else if(item.titre == "Langues"){
        divText.innerHTML = afficherLangues(item);
    }
    else if(item.titre == "Loisirs"){
        divText.innerHTML = afficherLoisirs(item);
    }
    else if(item.titre == "Titre"){
        divText.innerHTML = afficherTitre(item);
    }
    else if(item.titre =="Voir"){
        divText.innerHTML = afficherVoir(monCV);
    }
    else if(item.titre == "Déconnexion"){
        viderElement(body);
        createPF();
    }
    item.titre == "Coordonnnees" || item.titre == "Déconnexion" || item.titre=="Titre" || item.titre=="Voir" ? "" : bouttonAjouter(item);
    item.titre == "Déconnexion" || item.titre=="Voir" ? "" : bouttonModifier(item);
}

function afficherCoordonnnees(coordonnneesItem){
    let coordonnnees = coordonnneesItem.valeur
    let text = '<div class="coordonnees"> ';
    text +="<h3>"+coordonnneesItem.titre+"</h3>"
    text +="<h4>"+coordonnnees.nom+" "+coordonnnees.prenom+"</h4>";
    text +="<p> Email : "+coordonnnees.email+"</p>";
    text +="<p> Tel : "+coordonnnees.tel+"</p>";
    text +="<p> Adresse : "+coordonnnees.rue+" "+coordonnnees.numero+", "+coordonnnees.codePostal+" "+coordonnnees.ville+"</p>";
    text +="<p> Date de naissance : "+coordonnnees.naissance+"</p>";
    text +="<p> Age : "+coordonnnees.age+"</p>";
    text +="<p> GitHub : "+coordonnnees.gitHub+"</p>";
    text +="<p> LinkedIn : "+coordonnnees.linkedIn+"</p>";
    text +="</div>"
    return text;
}


function afficherFormations(formations){
    let text ="<h3 class='titre'>"+formations.titre+"</h3>"
    text += '<div class ="formations">'
    text += "<table><thead><tr><th>Annee</th><th>Nom</th><th>Ecole</th><th></th></tr></thead><tbody>";
    for (let i = 0; i < formations.valeur.length; i++) {
        let formation = formations.valeur[i];
        text += '<tr><td>'+formation.annee+'</td><td>'+formation.nom+'</td><td>'+formation.ecole+'</td><td><button onclick="supprimerElement(\''+formations.titre+'\','+i+')">Supprimer</button></td></tr>';
    }
    text += "</tbody></table></div>";
    return text;
}

function afficherCompetences (competences){
    let text ="<h3 class='titre'>"+competences.titre+"</h3> "
    text +='<div class="competences">'; 
    for (let i = 0; i < competences.valeur.length; i++) {
        let competence = competences.valeur[i];
        text += '<div class="competences2"><h3>'+competence.titre+'</h3><button onclick="supprimerElement(\''+competences.titre+'\','+i+')">Supprimer</button><button onclick="ajouterElement(\''+competences.titre+'\','+i+')">Ajouter</button><br><br>'; 
        for (let j = 0; j < competence.type.length; j++) {
            text += '<div> - '+competence.type[j]+' <div class="supprimer"><button onclick="supprimerElement(\''+competences.titre+'\','+i+','+j+')">Supprimer</button></div></div>'; 
        }   
        text +="</div>"
    }
    text += "</div>";
    return text;
}

function afficherExperiences(experiences){
    let text ="<h3 class='titre'>"+experiences.titre+"</h3>";
    text +="<table><thead><tr><th>Année</th><th>Intitulé</th><th>Acquis</th><th></th></tr></thead><tbody>";
    for (let i = 0; i < experiences.valeur.length; i++) {
        let experience = experiences.valeur[i];
     
        text += "<tr><th class ='expTitre'>"+experience.nom+"</th>"+'<th colspan="3" class ="expTitre"><button  onclick="supprimerElement(\''+experiences.titre+'\','+i+')">Supprimer</button><button  onclick="ajouterElement(\''+experiences.titre+'\','+i+')">Ajouter</button></th></tr>'; 
        for (let j = 0; j < experience.valeur.length; j++) {
            text +="<tr><td>"+experience.valeur[j].annee+"</td>"; 
            text +="<td>"+experience.valeur[j].firme+"</td>"; 
            text += (experience.valeur[j].acquis == undefined)?"":"<td>"+experience.valeur[j].acquis+"</td>";
            text += "<td>"+'<button onclick="supprimerElement(\''+experiences.titre+'\','+i+','+j+')">Supprimer</button>'+"</td></tr>"; 
        }
    }
    text += "</tbody></table>";
    return text;
}

function afficherLangues(langues){
    let text ='<div class="langues">'
    text += "<h3>"+langues.titre+"</h3>";
    for (let i = 0; i < langues.valeur.length; i++) {
        let langue = langues.valeur[i];
        text += "<p>"+langue.nom+" : "+langue.type+'<button onclick="supprimerElement(\''+langues.titre+'\','+i+')">Supprimer</button>'+"</p>";
    }
    text += "</div>"
    return text;
}

function afficherLoisirs(loisirs){
    let text = '<div class ="loisirs">'
    text +="<h3>"+loisirs.titre+"</h3>";
    for (let i = 0; i < loisirs.valeur.length; i++) {
        let loisir = loisirs.valeur[i];
        text +="<p>"+loisir+'<button onclick="supprimerElement(\''+loisirs.titre+'\','+i+')">Supprimer</button>'+"</p>";
    }
    return text;
}

function afficherTitre(titre){
    let text = '<div class ="loisirs">'; 
    text +="<h3>"+titre.titre+"</h3>";
    text +="<h4>"+titre.valeur+"</h4>";
    return text;
}

function afficherVoir(voir){
    console.log(voir)
    let text = '<div class ="cv">'; 
    text +="<div class='cvCoordonnees'>";
    text +="<p>"+voir[0].valeur.nom+" "+voir[0].valeur.prenom+"<p/>";
    text +="<p> Né le : "+voir[0].valeur.naissance+"<p/>";
    text +="<p>"+voir[0].valeur.codePostal+" "+voir[0].valeur.ville+"<p/>";
    text +="</div>";
    text +="<div class='cvContenu'><p> A FAIRE !!!</p></div>";
    return text;
}

///---------AFFICHAGE MODIFICATION--------------------------////
function modifier(item){ 
    createDiv();

    if(item.titre == "Coordonnnees"){
        divText.innerHTML = afficherModifierCoordonnnees(item);
    }
    else  if(item.titre == "Formations"){
        divText.innerHTML = afficherModifierFormations(item);
    }
    else if(item.titre == "Competences"){
        divText.innerHTML = afficherModifierCompetences(item);
    }
    else if(item.titre == "Experiences"){
        divText.innerHTML = afficherModifierExperiences(item);
    }
    else if(item.titre == "Langues"){
        divText.innerHTML = afficherModifierLangues(item);
    }
    else if(item.titre == "Loisirs"){
        divText.innerHTML = afficherModifierLoisirs(item);
    }
    else if(item.titre == "Titre"){
        divText.innerHTML = afficherModifierTitre(item);
    }
    bouttonValider(item.titre)
}

function afficherModifierCoordonnnees(coordonneesItem){
    let coordonnees = coordonneesItem.valeur;
    let form ="<form action='#' method='post' id='formModifier'>"; 
    form += "<div class='formDiv'><label>Nom : </label><input type='text' id='nom' name='nom' value='"+coordonnees.nom+"'></div>";
    form += "<div class='formDiv'><label>Prenom : </label> <input type='text' name='prenom' value='"+coordonnees.prenom+"'></div>";
    form += "<div class='formDiv'><label>Email : </label><input type='email' name='email' value='"+coordonnees.email+"'></div>";
    form += "<div class='formDiv'><label>Age : </label><input type='number' name='age' value="+coordonnees.age+"></div>";
    form += "<div class='formDiv'><label>Naissance : </label><input type='date' name='naissance' value='"+coordonnees.naissance+"'></div>";
    form += '<div class="formDiv"><label>Rue : </label><input type="text" name="rue" value="'+coordonnees.rue+'"></div>';
    form += "<div class='formDiv'><label>Numéro : </label><input type='number' name='numero' value='"+coordonnees.numero+"'></div>";
    form += "<div class='formDiv'><label>Code postal : </label><input type='number' name='codePostal' value='"+coordonnees.codePostal+"'></div>";
    form += "<div class='formDiv'><label>Ville : </label><input type='text' name='ville' value='"+coordonnees.ville+"'></div>";
    form += "<div class='formDiv'><label>Téléphone : </label><input type='tel' name ='tel' value='"+coordonnees.tel+"'></div>";
    form += "<div class='formDiv'><label>Github : </label><input type='text' name='gitHub' value='"+coordonnees.gitHub+"'></div>";
    form += "<div class='formDiv'><label>LinkedIn : </label><input type='text' name='linkedIn' value='"+coordonnees.linkedIn+"'></div>";
    form += "</form>"
    return form;
}

function afficherModifierFormations(formationsItem){
    let formations = formationsItem.valeur;
    let form ="<form action='#' method='post' id='formModifier'>"; 
    for (let i = 0; i < formations.length; i++) {
        form += "<h3 class='formDiv'>Formation "+(i+1)+"</h3>"
        form += "<div class='formDiv'><label>Nom : </label><input type='text' name='nom' value='"+formations[i].nom+"'></div>";
        form += "<div class='formDiv'><label>Année : </label> <input type='text' name='annee' value='"+formations[i].annee+"'></div>";
        form += "<div class='formDiv'><label>Ecole : </label><input type='text' name='ecole' value='"+formations[i].ecole+"'></div>";
    }
    form += "</form>"
    return form;
}

function afficherModifierCompetences(competencesItem){
    let competences = competencesItem.valeur;
    let form ="<form action='#' method='post' id='formModifier'>"; 
    for (let i = 0; i < competences.length; i++){
        form += "<h3 class='formDiv'>"+competencesItem.titre+" "+(i+1)+"</h3>";;
        form += "<div class='formDiv'><p class='formDiv'>Titre : </p><input class='formDiv' type='text' id='titre' name='titre' value='"+competences[i].titre+"'></div>";
        form += "<p class='formDiv'>Type : </p>"
        for (let j = 0; j < competences[i].type.length; j++ ){
            form += "<div class='formDiv'><input type='text' id='type' name='type"+i+"' value='"+competences[i].type[j]+"'></div>";
       }
    }
    form += "</form>"
    return form;
}

function afficherModifierExperiences(expriencesItem){
    experiences = expriencesItem.valeur;
    let form ="<form action='#' method='post' id='formModifier'>"; 
    for(let i = 0; i < experiences.length; i++){
        form += "<h3 class='formDiv'>"+expriencesItem.titre+" "+(i+1)+"</h3>";
        form += "<div class='formDiv'><label>Titre : </label><input type='text' id='nom' name='nom' value='"+experiences[i].nom+"'></div>";
        for (let j = 0; j < experiences[i].valeur.length; j++ ){
            form += "<p class='formDiv'>"+expriencesItem.titre+" "+experiences[i].nom+" "+(j+1)+"</p>";
            form += "<div class='formDiv'><label>Annee : </label><input type='text' id='type' name='annee"+i+"' value='"+experiences[i].valeur[j].annee+"'></div>";
            form += "<div class='formDiv'><label>Firme : </label><input type='text' id='type' name='firme"+i+"' value='"+experiences[i].valeur[j].firme+"'></div>";
            form += "<div class='formDiv'><label>Acquis : </label><textarea type='text' id='type' name='acquis"+(i)+"'>"+experiences[i].valeur[j].acquis+"</textarea></div>";
           }
    }
    form += "</form>"
    return form;
}

function afficherModifierLangues(languesItem){
    langues = languesItem.valeur;
    let form ="<form action='#' method='post' id='formModifier'>"; 
    for(let i = 0; i < langues.length; i++){
        form += "<h3 class='formDiv'>"+languesItem.titre+" "+(i+1)+"</h3>";
        form += "<div class='formDiv'><label>Langue : </label><input type='text' id='nom' name='nom' value='"+langues[i].nom+"'></div>";
        form += "<div class='formDiv'><label>Niveau : </label><input type='text' id='type' name='type' value='"+langues[i].type+"'></div>";   
    }
    form += "</form>"
    return form;
}

function afficherModifierLoisirs(loisirsItem){
    loisirs = loisirsItem.valeur;
    let form ="<form action='#' method='post' id='formModifier'>"; 
    for(let i = 0; i < loisirs.length; i++){
        form += "<div class='formDiv'><label>"+loisirsItem.titre+" "+(i+1)+" : </label><input type='text' id='nom' name='nom' value='"+loisirs[i]+"'></div>";
    }
    form += "</form>"
    return form;
}

function afficherModifierTitre(TitreItem){
    titre = TitreItem.valeur;
    let form ="<form action='#' method='post' id='formModifier'>"; 
    form += "<div class='formDiv'><label>"+TitreItem.titre+" : </label><input type='text' id='nom' name='titre' value='"+TitreItem.valeur+"'></div>";
    form += "</form>";
    return form;
}
///--------------VALIDER MODIFICATION-------------------------///

function valider(titre,formModifier){
    let div = document.getElementById("div");
    div.setAttribute("class","container");
    var item;
    if(titre == "Coordonnnees"){
        monCV[0].valeur = {
            nom : formModifier.nom.value,
            prenom : formModifier.prenom.value,
            email : formModifier.email.value,
            tel : formModifier.tel.value,   
            rue : formModifier.rue.value,
            numero : formModifier.numero.value,
            ville : formModifier.ville.value,
            codePostal : formModifier.codePostal.value,
            naissance : formModifier.naissance.value,
            age : formModifier.age.value,
            gitHub : formModifier.gitHub.value,
            linkedIn : formModifier.linkedIn.value, 
        }
        item = monCV[0];
        div.innerHTML = afficherCoordonnnees(item);
    }
    else if(titre == "Formations"){
        let lf = monCV[1].valeur.length;
        if (lf == 1){
            monCV[1].valeur[0].annee = formModifier.annee.value,
            monCV[1].valeur[0].nom = formModifier.nom.value,
            monCV[1].valeur[0].ecole = formModifier.ecole.value  
        }
        else{
            for (let i = 0; i <monCV[1].valeur.length; i++) {  
                monCV[1].valeur[i].annee = formModifier.annee[i].value,
                monCV[1].valeur[i].nom = formModifier.nom[i].value,
                monCV[1].valeur[i].ecole = formModifier.ecole[i].value  
            }  
        }
        item = monCV[1];
        div.innerHTML = afficherFormations(item);
    }
    else if(titre == "Competences"){
        let lc = monCV[2].valeur.length;
        if(lc == 1){
            monCV[2].valeur[0].titre = formModifier.titre.value;
            let l = monCV[2].valeur[0].type.length;
            if(l==1){
                // si n'a pas crée pas une liste lors de la validation du formulaire 1 seule elements
                monCV[2].valeur[0].type[0] = formModifier["type0"].value
            }
            else{
                  // sinon c'est un liste
                for(let j = 0; j < monCV[2].valeur[0].type.length; j++){
                    monCV[2].valeur[0].type[j] = formModifier["type0"][j].value
                }
            }
        }
        else{
            for (let i = 0; i < monCV[2].valeur.length; i++) {  
                monCV[2].valeur[i].titre = formModifier.titre[i].value;
                let l = monCV[2].valeur[i].type.length;
                if(l==1){
                    // si n'a pas crée pas une liste lors de la validation du formulaire 1 seule elements
                    monCV[2].valeur[i].type[0] = formModifier["type"+i].value
                }
                else{
                      // sinon c'est un liste
                    for(let j = 0; j < monCV[2].valeur[i].type.length; j++){
                        monCV[2].valeur[i].type[j] = formModifier["type"+i][j].value
                    }
                }
            }  
        }
      
        item = monCV[2];
        div.innerHTML = afficherCompetences(item);
    }
    else if(titre == "Experiences"){
        for (let i = 0; i < monCV[3].valeur.length; i++) {  
            monCV[3].valeur[i].nom = formModifier.nom[i].value;
            let l = monCV[3].valeur[i].valeur.length;
            if(l ==1 ){
                // si n'a pas crée pas une liste lors de la validation du formulaire 1 seule elements
                monCV[3].valeur[i].valeur[0].acquis = formModifier["acquis"+i].value;  
                monCV[3].valeur[i].valeur[0].annee = formModifier["annee"+i].value;
                monCV[3].valeur[i].valeur[0].firme = formModifier["firme"+i].value;
            }
            else{
                // sinon c'est un liste
                for(let j = 0; j < l; j++){
                        monCV[3].valeur[i].valeur[j].acquis = formModifier["acquis"+i][j].value;  
                        monCV[3].valeur[i].valeur[j].annee = formModifier["annee"+i][j].value;
                        monCV[3].valeur[i].valeur[j].firme = formModifier["firme"+i][j].value;
                    }
            }
        }  

        item = monCV[3];
        div.innerHTML = afficherExperiences(item);
    }
    else if(titre == "Langues"){

        let ll = monCV[4].valeur.length;
        if(ll == 1){
            monCV[4].valeur[0].nom = formModifier.nom.value;
            monCV[4].valeur[0].type = formModifier.type.value;
        }
        else{
            for(let i = 0; i < ll; i++){
                monCV[4].valeur[i].nom = formModifier.nom[i].value;
                monCV[4].valeur[i].type = formModifier.type[i].value;
            }
        }
        item = monCV[4];
        div.innerHTML = afficherLangues(item);
    }
    else if(titre == "Loisirs"){

        console.log(formModifier);
        let ll = monCV[5].valeur.length;
        if(ll == 1){
            monCV[5].valeur[0] = formModifier.nom.value;
        }
        else{
            for(let i = 0; i < ll; i++){
                monCV[5].valeur[i] = formModifier.nom[i].value;
                console.log(formModifier.nom[i].value);
            }
        }
      

        item = monCV[5];
        div.innerHTML = afficherLoisirs(item);
    }

    else if(titre == "Titre"){
        monCV[6].valeur = formModifier.nom.value;
        item = monCV[6];
        div.innerHTML = afficherTitre(item);
    }
    afficherElement(item);
}



/////-----------------AJOUTER ----------------/////

function ajouter(item){ 
    createDiv();

    if(item.titre == "Coordonnnees"){
        divText.innerHTML = afficherAjouterCoordonnnees(item);
    }
    else  if(item.titre == "Formations"){
        divText.innerHTML = afficherAjouterFormations(item);
    }
    else if(item.titre == "Competences"){
        divText.innerHTML = afficherAjouterCompetences(item);
    }
    else if(item.titre == "Experiences"){
        divText.innerHTML = afficherAjouterExperiences(item);
    }
    else if(item.titre == "Langues"){
        divText.innerHTML = afficherAjouterLangues(item);
    }
    else if(item.titre == "Loisirs"){
        divText.innerHTML = afficherAjouterLoisirs(item);
    }
    bouttonValiderAjout(item.titre);
}


///---------------- AFFICHAGE AJOUTER --------------------///

function afficherAjouterCoordonnnees(item){
    /// rien a ajouter pour le moment 
}

function afficherAjouterFormations(formationItem){
    let formations = formationItem.valeur;
    let form ="<form action='#' method='post' id='formModifier'>"; 
    form += "<div class='formDiv'><label>Nom : </label>   <input type='text' name='nom'></div>";
    form += "<div class='formDiv'><label>Année : </label> <input type='text' name='annee'></div>";
    form += "<div class='formDiv'><label>Ecole : </label> <input type='text' name='ecole'></div>";
    form += "</form>"
    return form;
}

function afficherAjouterCompetences(competencesItem){
    let competences = competencesItem.valeur;
    let form ="<form action='#' method='post' id='formModifier'>"; 
    form +="<div class='formDiv'><label>Nom : </label> <input type='text' name='nom'></div>";
    form +="<div class='formDiv'><label>Type : </label> <input type='text' name='type'></div>";
    form += "</form>"
    return form;
}

function afficherAjouterExperiences(experiencesItem){
    let experiences = experiencesItem.valeur;
    let form ="<form action='#' method='post' id='formModifier'>"; 
    form += "<h3 class='formDiv'>"+experiencesItem.titre+"</h3>";
    form += "<div class='formDiv'><label>Titre : </label><input type='text' id='nom' name='nom'></div>";
    form += "<div class='formDiv'><label>Annee : </label><input type='text' id='type' name='annee' ></div>";
    form += "<div class='formDiv'><label>Firme : </label><input type='text' id='type' name='firme' ></div>";
    form += "<div class='formDiv'><label>Acquis : </label><textarea type='text' id='type' name='acquis'></textarea></div>";
    form += "</form>"
    return form;
}

function afficherAjouterLangues(languesItem){
    let langues = languesItem.valeur;
    let form ="<form action='#' method='post' id='formModifier'>"; 
    form += "<h3 class='formDiv'>"+languesItem.titre+"</h3>";
    form += "<div class='formDiv'><label>Langues : </label><input type='text' id='nom' name='nom'></div>";
    form += "<div class='formDiv'><label>Niveau : </label><input type='text' id='type' name='type' ></div>";
    form += "</form>"
    return form;
}

function afficherAjouterLoisirs(loisirsItem){
    let loisirs = loisirsItem.valeur;
    let form ="<form action='#' method='post' id='formModifier'>"; 
    form += "<h3 class='formDiv'>"+loisirsItem.titre+"</h3>";
    form += "<div class='formDiv'><input type='text' id='nom' name='nom'></div>";
    form += "</form>"
    return form;
}

///-----------------VALIDER AJOUT -----------------/////

function validerAjout(titre,formModifier){
    let div = document.getElementById("div");
    div.setAttribute("class","container");
    var item;
    console.log(formModifier)
    if(titre == "Coordonnnees"){
       /// rien a valider car pas d'ajout
    }
    else if(titre == "Formations"){
        let newVal = {
            annee : formModifier.annee.value,
            ecole : formModifier.ecole.value,
            nom : formModifier.nom.value,
        }
        formModifier.annee.value || formModifier.ecole.value || formModifier.nom.value ? monCV[1].valeur.push(newVal) : "",
        item = monCV[1];
    }
    else if(titre == "Competences"){
        if(formModifier.nom.value && formModifier.type.value){
            let newVal = {
                titre : formModifier.nom.value,
                type : [formModifier.type.value]
            }
            monCV[2].valeur.push(newVal);
        }
        else if(formModifier.nom.value && !formModifier.type.value){
            let newVal = {
                titre : formModifier.nom.value,
                type : []
            }
            monCV[2].valeur.push(newVal);
        }
       
        item = monCV[2];
    }
    else if(titre == "Experiences"){
        let newVal ={   
                    nom : formModifier.nom.value,
                    valeur:
                        [
                            {
                                annee: formModifier.annee.value,
                                firme : formModifier.firme.value,
                                acquis : formModifier.acquis.value
                            },
                        ]
                    }
        formModifier.nom.value || formModifier.nom.value || formModifier.firme.value || formModifier.acquis.value ? monCV[3].valeur.push(newVal) : "",
        item = monCV[3];
    }
    else if(titre == "Langues"){
        let newVal ={
                        nom : formModifier.nom.value,
                        type : formModifier.type.value,
                    }
        newVal.nom && newVal.type ? monCV[4].valeur.push(newVal):"";
        item = monCV[4];
    }
    else if(titre == "Loisirs"){
        formModifier.nom.value ? monCV[5].valeur.push(formModifier.nom.value):"";
        item = monCV[5];
    }
    afficherElement(item);
}

///---------- AJOUTER UN ELEMENT ---------------///



function ajouterElement(titre,i){
    createDiv();
    //console.log(i);
    //console.log(titre);
    monCV
    let item ;
    

    if(titre == "Coordonnnees"){
        divText.innerHTML = afficherAjouterUneCoordonnnees(item);
    }
    else  if(titre == "Formations"){
        item = monCV[1].valeur[i];
        divText.innerHTML = afficherAjouterUneFormations(item);
    }
    else if(titre == "Competences"){
        item = monCV[2].valeur[i];
        divText.innerHTML = afficherAjouterUneCompetences(item);
    }
    else if(titre == "Experiences"){
        item = monCV[3].valeur[i];
        divText.innerHTML = afficherAjouterUneExperiences(item);
    }
    else if(titre == "Langues"){
        item = monCV[4].valeur[i];
        divText.innerHTML = afficherAjouterUneLangues(item);
    }
    else if(titre == "Loisirs"){
        item = monCV[5].valeur[i];
        divText.innerHTML = afficherAjouterUneLoisirs(item);
    }
    bouttonValiderUnAjout(titre,item);

}

function afficherAjouterUneExperiences(item){
    //console.log(item);
    let form ="<form action='#' method='post' id='formModifier'>"; 
    form += "<h3 class='formDiv'>"+item.nom+"</h3>";
    form += '<div class="formDiv"><label>Annee : </label><input type="text" id="type" name="annee" ></div>';
    form += "<div class='formDiv'><label>Firme : </label><input type='text' id='type' name='firme' ></div>";
    form += "<div class='formDiv'><label>Acquis : </label><textarea type='text' id='type' name='acquis'></textarea></div>";
    form += "</form>"
    return form;
};

function afficherAjouterUneCompetences(item){
    let form ="<form action='#' method='post' id='formModifier'>"; 
    form += "<h3 class='formDiv'>"+item.titre+"</h3>";
    form += '<div class="formDiv"><label>Type : </label><input type="text" id="type" name="type" ></div>';
    form += "</form>"
    return form;
}

////----VALIDER UN AJOUT -----///
function validerUnAjout(titre,formModifier,item){
    let div = document.getElementById("div");
    div.setAttribute("class","container");
    var item;
    if(titre == "Coordonnnees"){
      
    }
    else if(titre == "Formations"){
    
    }
    else if(titre == "Competences"){
        for (let i = 0; i < monCV[2].valeur.length; i++) {
            if(item.titre == monCV[2].valeur[i].titre){
                console.log(monCV[2].valeur[i].type)
                formModifier.type.value ? monCV[2].valeur[i].type.push(formModifier.type.value,) : "";
               
            }
        }
        item = monCV[2];
        div.innerHTML = afficherCompetences(item);
    }
    else if(titre == "Experiences"){
        //console.log(nom)
        //console.log(monCV[3].valeur[0].nom)
        for (let i = 0; i < monCV[3].valeur.length; i++) {
            if(item.nom == monCV[3].valeur[i].nom){
                let newVal ={   
                            annee: formModifier.annee.value,
                            firme : formModifier.firme.value,
                            acquis : formModifier.acquis.value
                    }
                formModifier.annee.value || formModifier.firme.value || formModifier.acquis.value ? monCV[3].valeur[i].valeur.push(newVal) : "",
                item = monCV[3];
            }
        }
        item = monCV[3];
        div.innerHTML = afficherExperiences(item);
    }
    else if(titre == "Langues"){

    }
    else if(titre == "Loisirs"){

    }
    afficherElement(item);
}