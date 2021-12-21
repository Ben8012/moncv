function createPF(){
    new Contenu();
    
}

function Contenu(){
    this.cases=[];
    this.afficher();
}

function Case(contenu){
    this.contenu = contenu;
}



Contenu.prototype.afficher = function(){
    var nav = document.getElementById("nav");
    nav.setAttribute("class","nav");
    while (nav.firstChild) nav.removeChild(nav.firstChild);

    for (var item in monCV) {
        console.log(item);
        var button = nav.appendChild(document.createElement("button"));
        button.setAttribute("class","button");
        button.appendChild(document.createTextNode(item));
        
        var c = new Case(this);
        this.cases[this.cases.length] = c;

        button.onclick = function(c){return function(){ c.cliquer(c)}; }(c);

    }

    var div = document.getElementById("div");
    div.setAttribute("class","div");
    while (div.firstChild) div.removeChild(div.firstChild);
    var coordonnnees = monCV.coordonnnees;
   
    // for (var item2 in coordonnnees ) {
        //console.log(item)
        let p = div.appendChild(document.createElement("p"));
        p.setAttribute("class","p");
        p.appendChild(document.createTextNode(monCV.coordonnnees));
    // }

}

Case.prototype.cliquer = function(c){
    var div = document.getElementById("div");
    div.setAttribute("class","div");
    while (div.firstChild) div.removeChild(div.firstChild);
    
    for (var item in c.contenu.cases) {
        console.log("apres le click : "+item);
        // for( var number in item){
        //     console.log(number.valueOf())
        //     var p = div.appendChild(document.createElement("p"));
        //     p.setAttribute("class","p");
        //     p.appendChild(document.createTextNode(number.nom));
        // }
    }
}



//objet
//test
let monCV ={
    coordonnnees:{
        nom : "sterckx",
        prenom : "Benjamin",
        email : "benjaminstercks@gmail.com",
        tel : "+32468366514",
        adresse :{
            rue : " rue de Villers",
            numero : "7",
            ville : "Villes la Ville",
            codePostal : "1495",
        },
        dateDeNaissance : "10 decembre 1980",
        age : " 41 ans",
        gitHub:"https://github.com/Ben8012",
        linkedIn : "a faire",

    },

    formations:{
        formation1 : {
            annee: "2021-2023",
            nom :"Baccalauréat Informatique de gestion",
            ecole : "IFOSUP",
        },
        formation2 : {
            annee : "2021–2022",
            nom :"Développeur .Net Angular",
            ecole : "TechnofuturTIC",
        },
        formation3 : {
            annee : "2020–2021",
            nom :"Accès aux métiers du numérique",
            ecole : "CESEP",
        },
        formation4 : {
            annee: "2019–2020",
            nom :"Instructeur de plongée",
            ecole : "BELDIVE",
        },
        formation5 : {
            annee : "2016–2017",
            nom :"Spécialiste Automates",
            ecole : "TECHNOCAMPUS",
        },
        formation6 : {
            annee : "2014–2015",
            nom :"Initiation aux automates",
            ecole : "FOREM",
        },
        formation7 : {
            annee : "2005–2007",
            nom :"Electricité industrielle",
            ecole : "IFOSUP",
        },


    },

    competences:{
        langages:{
            langage1:'C#',
            langage2:'TypeScript',
            langage3:'JavaScript',
            langage4:'SQL/TSQL',
            langage5:'PHP',
            langage6:'HTML5',
            langage7:'CSS3',
        },
        framworks:{
            framwork1:'ASP .NET',
            framwork2:'API .NET',
            framwork3:'WPF .NET',
            framwork4:'Angular TS',
            framwork5:'ExpressJS',
            framwork6:'Symfony',
           
        },
        robotique:{
            robotique1:'Arduino',
            robotique2:'Elegoo',
        },
        automate:{
            automate1:'Siemens TIA portal',
            automate2:'Schneider UnityPro',
            
        },
            
        

    },

    experiences: {
        developpeur : {
            nom: "Devaloppeur",
            annee : "2021 - 2022",
            firme : "TechnofuturTic",
            acquis: `Réalisation de 2 applications 3-Tiers visant à mettre en
            place une base de données exposée par une API sous un
            Design pattern MVC`,
            technologies : " .NET et TypeScript",
            ide : " Visual Studio et visual Studio Code",
            frontEnd : " ASP et Angular ",
            api : ".NET5 et ExpressJS",
            dataBase : "MySQL et SQLServer"
        },

        automaticien :{
            nom : "automaticien",
            automaticien1 : {
                annee: "2018-2020",
                firme : "Mama Lucia",
            },
            automaticien2 : {
                annee : "2017-2018",
                firme : "Engie Fabricom",
            },
            automaticien3 : {
                annee : "2015-2016",
                firme : "CERMAG ( Martinique)",
            }
        },
        technicien :{
            nom : "Technicien audiovisuel",
            technicien1 : {
                annee:"2010-2014",
                firme: "BEST",
                quoi :"Montage et programmation lumière ",
            },
            technicien2 : {
                annee:"2007-2010",
                firme: " ASP-BLUESQUARE",
                quoi :"Maintenance des appareillages son, lumière et vidéo ",
            }
        },
        electirien:{
            nom : "Électricien",
            electirien1 : {
                annee:"2005–2007",
                firme: "Ets Leclercq",
              
            },
            electirien2 : {
                annee:"2003–2005",
                firme: "Électricien",
                
            }
        },
        operateur:{
            nom:"Opérateur",
            operateur1:{
                annee:"1998-2003 ",
                firme: "Missions intérimaires",
                
            },
        },
    },

    langues:{
        langue1:{
            nom : "Francais",
            type : "langue maternelle"
        },
        langue2:{
            nom : "Anglais",
            type : "Niveau B1"
        },
        langue3:{
            nom : "Néerlandais",
            type : "Niveau A2"
        },
         
    },

    loisirs:{
        loisir1: "VTT",
        loisir2: "Plongée",
    }
}


// tableau

// let monCVTab =[
//     coordonnnees=[
//         nom = "sterckx",
//         prenom = "Benjamin",
//         email = "benjaminstercks@gmail.com",
//         tel = "+32468366514",
//         adresse =[
//             rue = " rue de Villers",
//             numero = "7",
//             ville = "Villes la Ville",
//             codePostal = "1495",
//         ],
//         dateDeNaissance = "10 decembre 1980",
//         age = " 41 ans",
//         gitHub="https=//github.com/Ben8012",
//         linkedIn = "a faire",

//     ],

//     formations=[
//             annee= ["2021-2023","2021–2022","2020–2021","2019–2020", "2016–2017", "2014–2015","2005–2007"],
//             nom =["Baccalauréat Informatique de gestion","Développeur .Net Angular","Accès aux métiers du numérique","Instructeur de plongée","Spécialiste Automates","Initiation aux automates","Electricité industrielle"],
//             ecole = ["IFOSUP","TechnofuturTIC","CESEP","BELDIVE","TECHNOCAMPUS"],
//     ],

//     competences=[
//         langages=['C#','TypeScript','JavaScript','SQL/TSQL' ,'PHP','HTML5','CSS3'],
//         framworks=['ASP .NET','API .NET','WPF .NET','Angular TS','ExpressJS','Symfony'],
//         robotique=['Arduino','Elegoo'],
//         automate=['Siemens TIA portal','Schneider UnityPro'],
//     ],

//     experiences= [
//         developpeur = [
//             annee = "2021 - 2022",
//             firme = "TechnofuturTic",
//             acquis= `Réalisation de 2 applications 3-Tiers visant à mettre en
//             place une base de données exposée par une API sous un
//             Design pattern MVC`,
//             technologies = " .NET et TypeScript",
//             ide = " Visual Studio et visual Studio Code",
//             frontEnd = " ASP et Angular ",
//             api = ".NET5 et ExpressJS",
//             dataBase = "MySQL et SQLServer"
//         ],

//         automaticien =[
//             annee= ["2018-2020","2017-2018","2015-2016"],
//             firme = ["Mama Lucia","Engie Fabricom","CERMAG ( Martinique)"],
//         ],
//         technicien =[
//             annee=["2010-2014","2007-2010","2005–2007","2003–2005","1998-2003 "],
//             firme=["BEST"," ASP-BLUESQUARE","Ets Leclercq","Électricien","Missions intérimaires" ],
//         ],
//     ],

//     langues=[
//         [
//         nom = ["Francais","Anglais","Néerlandais"],
//         niveau = ["langue maternelle","Niveau B1","Niveau A2"]
//         ],
//     ],

//     loisirs=[ "VTT", "Plongée" ]
// ]
