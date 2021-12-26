function createPF(){
    afficherNav();
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

function viderElement(element){
    while (element.firstChild) element.removeChild(element.firstChild);
}


///-----------LES BOUTTONS-----------------///

function bouttonModifier(item){
    let div = document.getElementById("div");
   
    let button =  div.appendChild(document.createElement("button"));
    button.setAttribute("class","bouttonModifier")
    button.appendChild(document.createTextNode("Modifier "+item.titre))
    button.onclick = function(){ modifier(item);}
}

function bouttonValider(titre){
    let div = document.getElementById("div");
    div.setAttribute("class","container");
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
    let div = document.getElementById("div");
   
    let button =  div.appendChild(document.createElement("button"));
    button.setAttribute("class","bouttonModifier")
    button.appendChild(document.createTextNode("Ajouter "+item.titre))
    button.onclick = function(){ ajouter(item);}
}

function bouttonValiderAjout(titre){
    let div = document.getElementById("div");
    div.setAttribute("class","container");
    let button =  div.appendChild(document.createElement("button"));
    button.titre = titre;
    button.setAttribute("class","bouttonModifier")
    button.appendChild(document.createTextNode("Valider"));
    button.onclick = function(){ 
        formModifier = document.getElementById("formModifier");
        validerAjout(this.titre,formModifier);
    }
}


///--------------AFFICHAGE ---------------///

function afficherElement(item){
    let div = document.getElementById("div");
    div.setAttribute("class","container");

    // div.innerHTML += "<div id='divText' class='divtext'></div>";
    // div.innerHTML += "<div id='divButton' class='divButton'></div>";

    // let divText = div.appendChild(document.createElement("div"));
    // divText.setAttribute("id","divText");
    // divText.setAttribute("class","divText");

    // let divButton = div.appendChild(document.createElement("div"));
    // divButton.setAttribute("id",'divButton');
    // divButton.setAttribute("class","boutton");
    //console.log(div);

    if(item.titre == "Coordonnnees"){
        div.innerHTML = afficherCoordonnnees(item); 
      
    }
    else if(item.titre == "Formations"){
        div.innerHTML = afficherFormations(item);
        bouttonAjouter(item);
    }
    else if(item.titre == "Competences"){
        div.innerHTML = afficherCompetences(item);
        bouttonAjouter(item);
    }
    else if(item.titre == "Experiences"){
        div.innerHTML = afficherExperiences(item);
        bouttonAjouter(item);
    }
    else if(item.titre == "Langues"){
        div.innerHTML = afficherLangues(item);
        bouttonAjouter(item);
    }
    else if(item.titre == "Loisirs"){
        div.innerHTML = afficherLoisirs(item);
        bouttonAjouter(item);
    }
    bouttonModifier(item);
    // div.innerHTML += "<div class='divBoutton' id='divBoutton'>"+bouttonAjouter(item);bouttonModifier(item)+"</div>"; 
}


function afficherCoordonnnees(coordonnneesItem){
    let coordonnnees = coordonnneesItem.valeur
    let text = '<div class="coordonnees"> ';
    text +="<h3>"+coordonnnees.nom+" "+coordonnnees.prenom+"</h3>";
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
    let text = '<div class ="formations">'
    text += "<table><thead><tr><th>Annee</th><th>Nom</th><th>Ecole</th></tr></thead><tbody>";
    for (let  formation of formations.valeur) {
       text += "<tr><td>"+formation.annee+"</td><td>"+formation.nom+"</td><td>"+formation.ecole+"</td></tr>";
    }
    text += "</tbody></table></div>";
    return text;
}

function afficherCompetences (competences){
    let text ='<div class="competences">';  
    for(let competence of competences.valeur){
        text += '<div class="competences2"><h3>'+competence.titre+"</h3>"
        for (let i = 0; i < competence.type.length; i++) {
            text += "<p> - "+competence.type[i]+"</p>"; 
        }   
        text +="</div>"
    }
    text += "</div>";
    return text;
}

function afficherExperiences(experiences){
    let text ="<table><thead><tr><th>Année</th><th>Intitulé</th><th>Acquis</th></tr></thead><tbody>";
    for( let experience of experiences.valeur){ 
        text += "</tr><th class ='expTitre'>"+experience.nom+"</th>";
        for (let i = 0; i < experience.valeur.length; i++) {
            text +="<tr><td>"+experience.valeur[i].annee+"</td>"; 
            text +="<td>"+experience.valeur[i].firme+"</td>"; 
            text += (experience.valeur[i].acquis == undefined)?"":"<td>"+experience.valeur[i].acquis+"</td>"; 
        }
    }
    text += "</tbody></table>";
    return text;
}

function afficherLangues(langues){
    let text ='<div class="langues">'
    text += "<h3>"+langues.titre+"</h3>";
    for(let langue of langues.valeur){
        text += "<p>"+langue.nom+" : "+langue.type+"</p>";
    }
    text += "</div>"
    return text;
}

function afficherLoisirs(loisirs){
    let text = '<div class ="loisirs">'
    text +="<h3>"+loisirs.titre+"</h3>";
    for(let loisir of loisirs.valeur){
        text +="<p>"+loisir+"</p>";
    }
    return text;
}

//// -------------FONCTION MODIFICATION --------------///

function modifier(item){ 
    let div = document.getElementById("div");
    div.setAttribute("class","formModifier");

    if(item.titre == "Coordonnnees"){
        div.innerHTML = afficherModifierCoordonnnees(item);
    }
    else  if(item.titre == "Formations"){
        div.innerHTML = afficherModifierFormations(item);
    }
    else if(item.titre == "Competences"){
        div.innerHTML = afficherModifierCompetences(item);
    }
    else if(item.titre == "Experiences"){
        div.innerHTML = afficherModifierExperiences(item);
    }
    else if(item.titre == "Langues"){
        div.innerHTML = afficherModifierLangues(item);
    }
    else if(item.titre == "Loisirs"){
        div.innerHTML = afficherModifierLoisirs(item);
    }
    bouttonValider(item.titre)
}

///---------AFFICHAGE MODIFICATION--------------------------////

function afficherModifierCoordonnnees(coordonneesItem){
    let coordonnees = coordonneesItem.valeur;
    console.log(coordonnees);
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
    console.log(formations);
    let form ="<form action='#' method='post' id='formModifier'>"; 
    for (let i = 0; i < formations.length; i++) {
        form += "<h3 class='formDiv'>Formation "+(i+1)+"</h3>"
        form += "<div class='formDiv'><label>Nom : </label><input type='text' name='nom"+i+"' value='"+formations[i].nom+"'></div>";
        form += "<div class='formDiv'><label>Année : </label> <input type='text' name='annee"+i+"' value='"+formations[i].annee+"'></div>";
        form += "<div class='formDiv'><label>Ecole : </label><input type='text' name='ecole"+i+"' value='"+formations[i].ecole+"'></div>";
    }
  
    form += "</form>"
    return form;
}

function afficherModifierCompetences(competencesItem){
    let competences = competencesItem.valeur;
    console.log(competences);
    let form ="<form action='#' method='post' id='formModifier'>"; 
    for (let i = 0; i < competences.length; i++){
        form += "<h3 class='formDiv'>"+competencesItem.titre+" "+(i+1)+"</h3>";;
        form += "<div class='formDiv'><p class='formDiv'>Titre : </p><input class='formDiv' type='text' id='titre' name='titre"+i+"' value='"+competences[i].titre+"'></div>";
        form += "<p class='formDiv'>Type : </p>"
        for (let j = 0; j < competences[i].type.length; j++ ){
        form += "<div class='formDiv'><input type='text' id='type' name='type"+(i)+(j)+"' value='"+competences[i].type[j]+"'></div>";
       }
    }
    form += "</form>"
    return form;
}

function afficherModifierExperiences(expriencesItem){
    experiences = expriencesItem.valeur;
    console.log(experiences);
    let form ="<form action='#' method='post' id='formModifier'>"; 
    for(let i = 0; i < experiences.length; i++){
        form += "<h3 class='formDiv'>"+expriencesItem.titre+" "+(i+1)+"</h3>";
        form += "<div class='formDiv'><label>Titre : </label><input type='text' id='nom' name='nom"+i+"' value='"+experiences[i].nom+"'></div>";
        for (let j = 0; j < experiences[i].valeur.length; j++ ){
            form += "<p class='formDiv'>"+expriencesItem.titre+" "+experiences[i].nom+" "+(j+1)+"</p>";
            form += "<div class='formDiv'><label>Annee : </label><input type='text' id='type' name='annee"+(i)+(j)+"' value='"+experiences[i].valeur[j].annee+"'></div>";
            form += "<div class='formDiv'><label>Firme : </label><input type='text' id='type' name='firme"+(i)+(j)+"' value='"+experiences[i].valeur[j].firme+"'></div>";
            form += "<div class='formDiv'><label>Acquis : </label><textarea type='text' id='type' name='acquis"+(i)+(j)+"'>"+experiences[i].valeur[j].acquis+"</textarea></div>";
           }
    }
    form += "</form>"
    return form;
}

function afficherModifierLangues(languesItem){
    console.log(languesItem);
    langues = languesItem.valeur;
    let form ="<form action='#' method='post' id='formModifier'>"; 
    for(let i = 0; i < langues.length; i++){
        form += "<h3 class='formDiv'>"+languesItem.titre+" "+(i+1)+"</h3>";
        form += "<div class='formDiv'><label>Langue : </label><input type='text' id='nom' name='nom"+i+"' value='"+langues[i].nom+"'></div>";
        form += "<div class='formDiv'><label>Niveau : </label><input type='text' id='type' name='type"+i+"' value='"+langues[i].type+"'></div>";
        
    }
    form += "</form>"
    return form;
}

function afficherModifierLoisirs(loisirsItem){
    console.log(loisirsItem);
    loisirs = loisirsItem.valeur;
    let form ="<form action='#' method='post' id='formModifier'>"; 
    for(let i = 0; i < loisirs.length; i++){
        form += "<div class='formDiv'><label>"+loisirsItem.titre+" "+(i+1)+" : </label><input type='text' id='nom' name='nom"+i+"' value='"+loisirs[i]+"'></div>";
    }
    form += "</form>"
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
        // for (let i = 0; i < 7; i++) {
        //     monCV[1].valeur[i].annee = formModifier.annee+i.value,
        //     monCV[1].valeur[i].nom = formModifier.nom+i.value,
        //     monCV[1].valeur[i].ecole = formModifier.ecole+i.value  
        // }  
        monCV[1].valeur[0].annee = formModifier.annee0.value,
        monCV[1].valeur[0].nom = formModifier.nom0.value,
        monCV[1].valeur[0].ecole = formModifier.ecole0.value,  
        
        monCV[1].valeur[1].annee = formModifier.annee1.value,
        monCV[1].valeur[1].nom = formModifier.nom1.value,
        monCV[1].valeur[1].ecole = formModifier.ecole1.value,

        monCV[1].valeur[2].annee = formModifier.annee2.value,
        monCV[1].valeur[2].nom = formModifier.nom2.value,
        monCV[1].valeur[2].ecole = formModifier.ecole2.value   
        
        monCV[1].valeur[3].annee = formModifier.annee3.value,
        monCV[1].valeur[3].nom = formModifier.nom3.value,
        monCV[1].valeur[3].ecole = formModifier.ecole3.value,
        
        monCV[1].valeur[4].annee = formModifier.annee4.value,
        monCV[1].valeur[4].nom = formModifier.nom4.value,
        monCV[1].valeur[4].ecole = formModifier.ecole4.value   
        
        monCV[1].valeur[5].annee = formModifier.annee5.value,
        monCV[1].valeur[5].nom = formModifier.nom5.value,
        monCV[1].valeur[5].ecole = formModifier.ecole5.value   

        monCV[1].valeur[6].annee = formModifier.annee6.value,
        monCV[1].valeur[6].nom = formModifier.nom6.value,
        monCV[1].valeur[6].ecole = formModifier.ecole6.value   
        
        item = monCV[1];
        div.innerHTML = afficherFormations(item);
    }
    else if(titre == "Competences"){
        monCV[2].valeur[0].titre = formModifier.titre0.value,
        monCV[2].valeur[1].titre = formModifier.titre1.value,
        monCV[2].valeur[2].titre = formModifier.titre2.value,  
        monCV[2].valeur[3].titre = formModifier.titre3.value,
        
        monCV[2].valeur[0].type[0] = formModifier.type00.value,
        monCV[2].valeur[0].type[1] = formModifier.type01.value,
        monCV[2].valeur[0].type[2] = formModifier.type02.value,
        monCV[2].valeur[0].type[3] = formModifier.type03.value,
        monCV[2].valeur[0].type[4] = formModifier.type04.value,
        monCV[2].valeur[0].type[5] = formModifier.type05.value,
        monCV[2].valeur[0].type[6] = formModifier.type06.value,

        monCV[2].valeur[1].type[0] = formModifier.type10.value,
        monCV[2].valeur[1].type[1] = formModifier.type11.value,
        monCV[2].valeur[1].type[2] = formModifier.type12.value,
        monCV[2].valeur[1].type[3] = formModifier.type13.value,
        monCV[2].valeur[1].type[4] = formModifier.type14.value,
        monCV[2].valeur[1].type[5] = formModifier.type15.value,

        monCV[2].valeur[2].type[0] = formModifier.type20.value,
        monCV[2].valeur[2].type[1] = formModifier.type21.value,

        monCV[2].valeur[3].type[0] = formModifier.type30.value,
        monCV[2].valeur[3].type[1] = formModifier.type31.value,

        item = monCV[2];
        div.innerHTML = afficherCompetences(item);
    }
    else if(titre == "Experiences"){
        console.log(formModifier),
        monCV[3].valeur[0].nom = formModifier.nom0.value,
        monCV[3].valeur[1].nom = formModifier.nom1.value,
        monCV[3].valeur[2].nom = formModifier.nom2.value,  
        monCV[3].valeur[3].nom = formModifier.nom3.value,
        monCV[3].valeur[4].nom = formModifier.nom4.value,

        monCV[3].valeur[0].valeur[0].acquis = formModifier.acquis00.value,  
        monCV[3].valeur[0].valeur[0].annee = formModifier.annee00.value,
        monCV[3].valeur[0].valeur[0].firme = formModifier.firme00.value,

        monCV[3].valeur[1].valeur[0].acquis = formModifier.acquis10.value,  
        monCV[3].valeur[1].valeur[0].annee = formModifier.annee10.value,
        monCV[3].valeur[1].valeur[0].firme = formModifier.firme10.value,

        monCV[3].valeur[1].valeur[1].acquis = formModifier.acquis11.value,  
        monCV[3].valeur[1].valeur[1].annee = formModifier.annee11.value,
        monCV[3].valeur[1].valeur[1].firme = formModifier.firme11.value,

        monCV[3].valeur[1].valeur[2].acquis = formModifier.acquis12.value,  
        monCV[3].valeur[1].valeur[2].annee = formModifier.annee12.value,
        monCV[3].valeur[1].valeur[2].firme = formModifier.firme12.value,

        monCV[3].valeur[2].valeur[0].acquis = formModifier.acquis20.value,  
        monCV[3].valeur[2].valeur[0].annee = formModifier.annee20.value,
        monCV[3].valeur[2].valeur[0].firme = formModifier.firme20.value,

        monCV[3].valeur[2].valeur[1].acquis = formModifier.acquis21.value,  
        monCV[3].valeur[2].valeur[1].annee = formModifier.annee21.value,
        monCV[3].valeur[2].valeur[1].firme = formModifier.firme21.value,

        monCV[3].valeur[2].valeur[2].acquis = formModifier.acquis22.value,  
        monCV[3].valeur[2].valeur[2].annee = formModifier.annee22.value,
        monCV[3].valeur[2].valeur[2].firme = formModifier.firme22.value,
   
        monCV[3].valeur[2].valeur[3].acquis = formModifier.acquis23.value,  
        monCV[3].valeur[2].valeur[3].annee = formModifier.annee23.value,
        monCV[3].valeur[2].valeur[3].firme = formModifier.firme23.value,

        monCV[3].valeur[3].valeur[0].acquis = formModifier.acquis30.value,  
        monCV[3].valeur[3].valeur[0].annee = formModifier.annee30.value,
        monCV[3].valeur[3].valeur[0].firme = formModifier.firme30.value,

        monCV[3].valeur[3].valeur[1].acquis = formModifier.acquis31.value,  
        monCV[3].valeur[3].valeur[1].annee = formModifier.annee31.value,
        monCV[3].valeur[3].valeur[1].firme = formModifier.firme31.value,

        monCV[3].valeur[4].valeur[0].acquis = formModifier.acquis40.value,  
        monCV[3].valeur[4].valeur[0].annee = formModifier.annee40.value,
        monCV[3].valeur[4].valeur[0].firme = formModifier.firme40.value,

        item = monCV[3];
        console.log(item);
        div.innerHTML = afficherExperiences(item);
    }
    else if(titre == "Langues"){

        monCV[4].valeur[0].nom = formModifier.nom0.value,
        monCV[4].valeur[0].type = formModifier.type0.value,

        monCV[4].valeur[1].nom = formModifier.nom1.value,
        monCV[4].valeur[1].type = formModifier.type1.value,

        monCV[4].valeur[2].nom = formModifier.nom2.value,
        monCV[4].valeur[2].type = formModifier.type2.value,

        item = monCV[4];
        div.innerHTML = afficherLangues(item);
    }
    else if(titre == "Loisirs"){

        monCV[5].valeur[0]= formModifier.nom0.value,
        monCV[5].valeur[1]= formModifier.nom1.value,
        monCV[5].valeur[2]= formModifier.nom2.value,

        item = monCV[5];
        div.innerHTML = afficherLoisirs(item);
    }
    bouttonModifier(item)
}

/////-----------------AJOUTER ----------------/////

function ajouter(item){ 
    let div = document.getElementById("div");
    div.setAttribute("class","formModifier");

    if(item.titre == "Coordonnnees"){
        div.innerHTML = afficherAjouterCoordonnnees(item);
    }
    else  if(item.titre == "Formations"){
        div.innerHTML = afficherAjouterFormations(item);
    }
    else if(item.titre == "Competences"){
        div.innerHTML = afficherAjouterCompetences(item);
    }
    else if(item.titre == "Experiences"){
        div.innerHTML = afficherAjouterExperiences(item);
    }
    else if(item.titre == "Langues"){
        div.innerHTML = afficherAjouterLangues(item);
    }
    else if(item.titre == "Loisirs"){
        div.innerHTML = afficherAjouterLoisirs(item);
    }
    bouttonValiderAjout(item.titre);
}


///---------------- AFFICHAGE AJOUTER --------------------///

function afficherAjouterCoordonnnees(item){

}

function afficherAjouterFormations(formationItem){
    let formations = formationItem.valeur;
    console.log(formations);
    let form ="<form action='#' method='post' id='formModifier'>"; 
    form += "<div class='formDiv'><label>Nom : </label>   <input type='text' name='nom'></div>";
    form += "<div class='formDiv'><label>Année : </label> <input type='text' name='annee'></div>";
    form += "<div class='formDiv'><label>Ecole : </label> <input type='text' name='ecole'></div>";
    form += "</form>"
    return form;
}

function afficherAjouterCompetences(competencesItem){
    let competences = competencesItem.valeur;
    console.log(competences)
    let form ="<form action='#' method='post' id='formModifier'>"; 
    for (let i = 0; i < competences.length; i++){
        form += "<h3 class='formDiv'>"+competences[i].titre+"</h3>";;
        form += "<div class='formDiv'><input type='text' name='type"+i+"'></div>";
    }
    form += "</form>"
    return form;
}

function afficherAjouterExperiences(experiencesItem){
    let experiences = experiencesItem.valeur;
    console.log(experiences);
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
    console.log(langues);
    let form ="<form action='#' method='post' id='formModifier'>"; 
    form += "<h3 class='formDiv'>"+languesItem.titre+"</h3>";
    form += "<div class='formDiv'><label>Langues : </label><input type='text' id='nom' name='nom'></div>";
    form += "<div class='formDiv'><label>Niveau : </label><input type='text' id='type' name='type' ></div>";
    form += "</form>"
    return form;
}

function afficherAjouterLoisirs(loisirsItem){
    let loisirs = loisirsItem.valeur;
    console.log(loisirs);
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
    if(titre == "Coordonnnees"){
       
        
    }
    else if(titre == "Formations"){
        let newVal = {
            annee : formModifier.annee.value,
            ecole : formModifier.ecole.value,
            nom : formModifier.nom.value,
        }
        formModifier.annee.value || formModifier.ecole.value || formModifier.nom.value ? monCV[1].valeur.push(newVal) : "",
       
        item = monCV[1];
        div.innerHTML = afficherFormations(item);
    }
    else if(titre == "Competences"){
       
        formModifier.type0.value ? monCV[2].valeur[0].type.push(formModifier.type0.value):"";
        formModifier.type1.value ? monCV[2].valeur[1].type.push(formModifier.type1.value):"";
        formModifier.type2.value ? monCV[2].valeur[2].type.push(formModifier.type2.value):"";
        formModifier.type3.value ? monCV[2].valeur[3].type.push(formModifier.type3.value):"";
        item = monCV[2];
        div.innerHTML = afficherCompetences(item);
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
        console.log(item);
        div.innerHTML = afficherExperiences(item);
    }
    else if(titre == "Langues"){
        let newVal ={
                        nom : formModifier.nom.value,
                        type : formModifier.type.value,
                    }
        monCV[4].valeur.push(newVal)
        item = monCV[4];
        div.innerHTML = afficherLangues(item);
    }
    else if(titre == "Loisirs"){

        formModifier.nom.value ? monCV[5].valeur.push(formModifier.nom.value):"";

        item = monCV[5];
        div.innerHTML = afficherLoisirs(item);
    }
    bouttonModifier(item)
}

// Objet utilisé

let monCV =[
    {   
        titre : "Coordonnnees",
        valeur : {
            nom : "Sterckx",
            prenom : "Benjamin",
            email : "benjamin@mail.com",
            tel : "+32468123456",   
            rue : "rue de la Ville",
            numero : "1",
            ville : "La Ville",
            codePostal : "1000",
            naissance : "1980-12-10",
            age : " 41",
            gitHub:"https://github.com/Ben8012",
            linkedIn : "a faire",
        }
    },

    {
        titre : "Formations",
        valeur :[ 
            {
                annee: "2021-2023",
                nom :"Baccalauréat Informatique de gestion",
                ecole : "IFOSUP",
            },
            {
                annee : "2021-2022",
                nom :"Développeur .NET Angular",
                ecole : "TechnofuturTIC",
            },
            {
                annee : "2020-2021",
                nom :"Accès aux métiers du numérique",
                ecole : "CESEP",
            },
            {
                annee: "2019-2020",
                nom :"Instructeur de plongée",
                ecole : "BELDIVE",
            },
            {
                annee : "2016-2017",
                nom :"Spécialiste Automates",
                ecole : "TECHNOCAMPUS",
            },
            {
                annee : "2014-2015",
                nom :"Initiation aux automates",
                ecole : "FOREM",
            },
            {
                annee : "2005-2007",
                nom :"Electricité industrielle",
                ecole : "IFOSUP",
            }
        ]
    },

    {
        titre : "Competences",
        valeur : 
        [
            {
                titre :"Langages",
                type :['C#','TypeScript','JavaScript','SQL/TSQL','PHP','HTML5','CSS3' ]
            },
                
            {
                titre :"Frameworks",
                type :['ASP .NET','API .NET','WPF .NET','Angular TS','ExpressJS','Symfony']
            },
            {
                titre:"Robotiques",
                type:['Arduino','Elegoo'],
            },
            {
                titre:"Automates",
                type:['Siemens TIA portal','Schneider UnityPro']
            }
        ]
    },

    {
        titre : "Experiences",
        valeur :
        [
            {
                nom: "Développeur",
                valeur :
                [
                    {
                        annee : "2021 - 2022",
                        firme : "TechnofuturTic",
                        acquis: `Réalisation de 2 applications 3-Tiers. Une sur le thème de la plongée l'autre est un "reseau social"`,
                        technologies : " .NET et TypeScript",
                        ide : " Visual Studio et visual Studio Code",
                        frontEnd : " ASP et Angular ",
                        api : ".NET5 et ExpressJS",
                        dataBase : "MySQL et SQLServer"
                    }
                  
                ]
               
            },
               
            {
                nom : "Automaticien",
                valeur:
                [
                    {
                        annee: "2018-2020",
                        firme : "Mama Lucia",
                        acquis : "Maintenance de ligne de production",
                    },
                        
                    {
                        annee : "2017-2018",
                        firme : "Engie Fabricom",
                        acquis : "Maintenance de pont roulant",
                    },
                    {
                        annee : "2015-2016",
                        firme : "CERMAG ( Martinique)",
                        acquis : "Expertises diverse en electro-mécanique",
                    }
                ]
            },
    
            
                
            {
                nom:"Audiovisuel",
                valeur :
                [
                    {
                        annee:"2010-2014",
                        firme: "BEST",
                        acquis :"Montage et programmation lumière ",
                    },
                    {
                        annee:"2007-2010",
                        firme: " ASP-BLUESQUARE",
                        acquis :"Maintenance des appareillages son, lumière et vidéo ",
                    },
                    {
                        annee:"2010-2014",
                        firme: "BEST",
                        acquis :"Montage et programmation lumière ",
                    },
                    {
                        annee:"2007-2010",
                        firme: " ASP-BLUESQUARE",
                        acquis :"Maintenance des appareillages son, lumière et vidéo ",
                    }      
                ]
           
            },

            {
                nom : "Électricien",
                valeur :
                [
                    {
                        annee:"2005–2007",
                        firme: "Ets Leclercq",
                        acquis :"Installations diverses",
                    },
                    {
                        annee:"2003–2005",
                        firme: "Électricien",
                        acquis :"Installations domestiques",
                    }
                ]
            },
            {
                
                nom:"Opérateur",
                valeur:
                [  
                    {
                        annee:"1998-2003 ",
                        firme: "Missions intérimaires",  
                        acquis :"Missions variées",           
                    }
                ] 
            }
        ]  
    },

    {
        titre :"Langues",
        valeur :
        [
            {
                nom : "Francais",
                type : "Langue maternelle"
            },
            {
                nom : "Anglais",
                type : "Niveau B1"
            },
            {
                nom : "Néerlandais",
                type : "Niveau A2"
            }
        ]  
    },
 
    {
        titre : "Loisirs",
        valeur :
        [
            "VTT",
            "Trail",
            "Plongée" 
        ]
    }
   
]