// creare elemento container lista
let containerLista = document.querySelector("ul");
// creare un array che contenga la lista della spesa
const listaSpesa = ["pane", "banane", "marmellata", "pesce", "pere", "pesche"];
// creare un ciclo che estrapoli la lista
let i = 0
while (i < listaSpesa.length) {
    const itemSpesa = listaSpesa[i];
    // creo un elemento li ripetuto tanto quanto gli elementi della lista
    let itemLista = `<li>${itemSpesa}</li>`
    i++
    // inserisco nell'ul
    containerLista.innerHTML += itemLista;
}