'use strict'

// window.addEventListener('load', () => {
document.addEventListener('DOMContentLoaded', () => {

    const contBanner = document.querySelector(".bienvenidos");
    const contCards = document.querySelector(".recomendados");
    const contDestinos = document.querySelector(".destinos");
    const contPopUp = document.querySelector('#popUpDiv');
    const contRecomendados = document.querySelector('.recomendados');
    const fragmento = document.createDocumentFragment();
    const arrayLoteria = [[], []];   //pos 0: sorteo de imagenes, pos 1: sorteo de textos.

    let imgPopUp, h2PopUp, pPopUp;

    /*Evento que oculta la imagen grande*/
    contPopUp.addEventListener('click', (ev) => {
        if (ev.target.tagName != "IMG") {
            contPopUp.style.visibility = "hidden";
        }
    });


    /*Evento que muestra la imagen grande o la oculta*/
    contRecomendados.addEventListener('click', (ev) => {
        if (ev.target.tagName == "IMG") {
            pPopUp.innerText = "\n" + ev.target.parentElement.children[2].textContent;
            h2PopUp.innerText = "\n" + (ev.target.parentElement.children[1].textContent).toUpperCase();
            imgPopUp.src = ev.target.src;
            contPopUp.style.visibility = "visible";
        } else {
            contPopUp.style.visibility = "hidden";
        }
    });


    /*Comprueba si el número generado al azar ya ha salido*/
    const haSalidoYa = (cantNros, tipo, nroRnd) => {
        let foundIt = false;
        let i = 0;

        /*Si la cantidad de números que han salido ya es igual a la
        cantiad de elementos del array empieza de nuevo el ciclo*/
        if (arrayLoteria[tipo].length == cantNros) { arrayLoteria[tipo] = []; }

        while (i < arrayLoteria[tipo].length && foundIt == false) {
            if (arrayLoteria[tipo][i] == nroRnd) { foundIt = true; }
            i++;
        }

        if (!foundIt) { arrayLoteria[tipo].push(nroRnd); }
        return foundIt;
    }


    /*Genera un número al azar*/
    const nroAlAzar = (maximo, indArray) => {
        let indice = 0;
        do {
            indice = Math.floor(Math.random() * maximo);
        } while (haSalidoYa(maximo, indArray, indice));
        return indice;
    }


    /*(1) Pone la imagen grande*/
    const crearImagenGrande = () => {
        const imgImagenGrande = document.createElement("IMG");
        imgImagenGrande.classList.add("popUpImg");
        fragmento.append(imgImagenGrande);

        const h2ImagenGrande = document.createElement("H2");
        h2ImagenGrande.classList.add("tituloPopUpImg");
        fragmento.append(h2ImagenGrande);

        const pImagenGrande = document.createElement("P");
        pImagenGrande.classList.add("textoPopUpImg");
        fragmento.append(pImagenGrande);

        contPopUp.append(fragmento);

        imgPopUp = document.querySelector(".popUpImg");
        h2PopUp = document.querySelector(".tituloPopUpImg");
        pPopUp = document.querySelector(".textoPopUpImg");
    }


    /*(2) Pone el banner*/
    const ponerBanner = () => {
        const arrayBanner = [
            { nombre: "1.jpg", titulo: "Imagen 1" },
            { nombre: "2.jpg", titulo: "Imagen 2" },
            { nombre: "3.jpg", titulo: "Imagen 3" },
            { nombre: "4.jpg", titulo: "Imagen 4" },
            { nombre: "5.jpg", titulo: "Imagen 5" },
            { nombre: "6.jpg", titulo: "Imagen 6" },
            { nombre: "7.jpg", titulo: "Imagen 7" },
            { nombre: "8.jpg", titulo: "Imagen 8" }
        ]
        // const arrayBanner = [["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"],
        // ["Imagen 1", "Imagen 2", "Imagen 3", "Imagen 4", "Imagen 5", "Imagen 6", "Imagen 7", "Imagen 8"]];

        let indice = Math.floor(Math.random() * arrayBanner.length);

        const bannerIMG = document.createElement("IMG");
        bannerIMG.src = "./Viajes/banner/" + arrayBanner[indice].nombre;
        bannerIMG.id = "banner";
        bannerIMG.title = arrayBanner[indice].titulo;
        bannerIMG.alt = arrayBanner[indice].titulo;

        contBanner.append(bannerIMG);
    }


    /*(3) Crea y pone las cards*/
    const ponerCards = cantCards => {
        const arrayCardsImgs = [
            { nombre: "viajes-1.jpg", titulo: "Imagen Card 1", texto: "Aenean vel leo vitae lorem tempor pellentesque. In pharetra convallis purus, a sodales dolor feugiat eget. Praesent tincidunt porttitor arcu, vitae sollicitudin nisi dapibus nec.Proin quis sodales lacus.Nunc rutrum dapibus libero sit amet euismod.Vivamus quis pretium diam.Vivamus molestie tortor nibh, eget porta neque ullamcorper a." },
            { nombre: "viajes-2.jpg", titulo: "Imagen Card 2", texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempora fuga, doloribus laboriosam blanditiis praesentium nihil dolor quae animi rerum sapiente veritatis expedita eaque sunt vero modi officiis aut obcaecati?" },
            { nombre: "viajes-3.jpg", titulo: "Imagen Card 3", texto: "Sed hendrerit libero quam, sit amet eleifend elit molestie id. Cras tempor, tellus id hendrerit sodales, augue lorem vehicula felis, at porta erat lectus eu enim. Nam venenatis, libero sit amet placerat venenatis, velit metus vestibulum lorem, ut mattis neque lacus at urna. Fusce nec turpis ut mauris condimentum tristique a dignissim ipsum.", },
            { nombre: "viajes-4.jpg", titulo: "Imagen Card 4", texto: "Mauris feugiat nulla odio, nec pulvinar lorem malesuada vel. Cras consectetur lorem a auctor egestas. Suspendisse in libero in ante fringilla tempus. Suspendisse auctor erat massa, at placerat augue aliquet ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut fringilla nibh enim, non imperdiet." },
            { nombre: "viajes-5.jpg", titulo: "Imagen Card 5", texto: "Vestibulum laoreet, tellus quis fermentum luctus, nulla risus elementum nulla, vitae luctus velit nulla sodales ante. Cras ac commodo lectus. Aenean vulputate scelerisque aliquam. Curabitur ex sem, sagittis sit amet suscipit euismod, condimentum non massa. Suspendisse potenti. Aliquam sed metus et lorem mollis lacinia sed eu eros. Nunc quis neque." },
            { nombre: "viajes-6.jpg", titulo: "Imagen Card 6", texto: "Curabitur venenatis purus vulputate lobortis finibus. Integer tempor, est ac tincidunt luctus, urna dolor tincidunt arcu, et scelerisque metus mauris sit amet lacus. Fusce nibh ex, blandit scelerisque ante eget, consectetur finibus quam. Duis sed efficitur orci. Suspendisse convallis, arcu ut pellentesque dapibus, velit purus aliquet metus, quis placerat nunc." },
            { nombre: "viajes-7.jpg", titulo: "Imagen Card 7", texto: "Mauris rutrum ultrices libero, ac convallis mi ullamcorper a. Donec in rutrum urna, eu laoreet enim. In hac habitasse platea dictumst. Maecenas nec nibh ac justo consectetur lacinia sit amet a dui. Integer dapibus commodo lorem, id scelerisque turpis dictum vel. Phasellus blandit et nisl sit amet pretium. Aenean fringilla." }
        ]

        // const arrayCardsImgs = [["viajes-1.jpg", "viajes-2.jpg", "viajes-3.jpg", "viajes-4.jpg", "viajes-5.jpg", "viajes-6.jpg", "viajes-7.jpg"],
        // ["Imagen Card 1", "Imagen Card 2", "Imagen Card 3", "Imagen Card 4", "Imagen Card 5", "Imagen Card 6", "Imagen Card 7"]];

        // const arrayCardsTexts = ["Aenean vel leo vitae lorem tempor pellentesque. In pharetra convallis purus, a sodales dolor feugiat eget. Praesent tincidunt porttitor arcu, vitae sollicitudin nisi dapibus nec.Proin quis sodales lacus.Nunc rutrum dapibus libero sit amet euismod.Vivamus quis pretium diam.Vivamus molestie tortor nibh, eget porta neque ullamcorper a.",
        //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempora fuga, doloribus laboriosam blanditiis praesentium nihil dolor quae animi rerum sapiente veritatis expedita eaque sunt vero modi officiis aut obcaecati?",
        //     "Sed hendrerit libero quam, sit amet eleifend elit molestie id. Cras tempor, tellus id hendrerit sodales, augue lorem vehicula felis, at porta erat lectus eu enim. Nam venenatis, libero sit amet placerat venenatis, velit metus vestibulum lorem, ut mattis neque lacus at urna. Fusce nec turpis ut mauris condimentum tristique a dignissim ipsum.",
        //     "Mauris feugiat nulla odio, nec pulvinar lorem malesuada vel. Cras consectetur lorem a auctor egestas. Suspendisse in libero in ante fringilla tempus. Suspendisse auctor erat massa, at placerat augue aliquet ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut fringilla nibh enim, non imperdiet.",
        //     "Vestibulum laoreet, tellus quis fermentum luctus, nulla risus elementum nulla, vitae luctus velit nulla sodales ante. Cras ac commodo lectus. Aenean vulputate scelerisque aliquam. Curabitur ex sem, sagittis sit amet suscipit euismod, condimentum non massa. Suspendisse potenti. Aliquam sed metus et lorem mollis lacinia sed eu eros. Nunc quis neque.",
        //     "Curabitur venenatis purus vulputate lobortis finibus. Integer tempor, est ac tincidunt luctus, urna dolor tincidunt arcu, et scelerisque metus mauris sit amet lacus. Fusce nibh ex, blandit scelerisque ante eget, consectetur finibus quam. Duis sed efficitur orci. Suspendisse convallis, arcu ut pellentesque dapibus, velit purus aliquet metus, quis placerat nunc.",
        //     "Mauris rutrum ultrices libero, ac convallis mi ullamcorper a. Donec in rutrum urna, eu laoreet enim. In hac habitasse platea dictumst. Maecenas nec nibh ac justo consectetur lacinia sit amet a dui. Integer dapibus commodo lorem, id scelerisque turpis dictum vel. Phasellus blandit et nisl sit amet pretium. Aenean fringilla."];

        for (let i = 1; i <= cantCards; i++) {
            const cardART = document.createElement("ARTICLE");
            cardART.classList.add("card");

            let ind = nroAlAzar(arrayCardsImgs.length, 0);

            const cardIMG = document.createElement("IMG");
            cardIMG.src = "./Viajes/viajes/" + arrayCardsImgs[ind].nombre;
            cardIMG.title = arrayCardsImgs[ind].titulo;
            cardIMG.alt = arrayCardsImgs[ind].titulo;

            const cardH3 = document.createElement("H3");
            cardH3.textContent = "Viaje " + i;

            const cardP = document.createElement("P");
            ind = nroAlAzar(arrayCardsImgs.length, 1);
            cardP.textContent = arrayCardsImgs[ind].texto;

            cardART.append(cardIMG, cardH3, cardP);

            fragmento.append(cardART);
        }
        contCards.append(fragmento);
    }


    /*(4) Poner opciones*/
    const ponerOpciones = () => {        
        const arrayDestinos = ["Roma", "Paris", "Amsterdan", "Egipto", "Mexico"];

        let destinosSEL = document.createElement("SELECT");
        destinosSEL.id = "destino";
        destinosSEL.name = "destino";

        arrayDestinos.forEach(destino => {
            let destinosOPT = document.createElement("OPTION");
            destinosOPT.value = destino.toLowerCase();
            destinosOPT.textContent = destino;
            destinosSEL.append(destinosOPT);
        });

        contDestinos.append(destinosSEL);
    }

    crearImagenGrande();
    ponerBanner();
    ponerCards(3);
    ponerOpciones();
});