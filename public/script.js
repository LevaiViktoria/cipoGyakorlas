console.log("Beléptem");
document.getElementById('fetch-shoes').onclick=fetchAndRenderShoes;

let isShown = false;
async function fetchAndRenderShoes() {
    if (isShown) {
        isShown = false;
        document.querySelector('.shoe-card-container').innerHTML = '';
        document.querySelector('#fetch-shoes').innerHTML = 'Az eddig elmentett cipők';
        return
    }
    const response = await fetch('/adatok/adatok.json');
    const shoes = await response.json();

    // let shoesHTML = "<h1>Cipők</h1>";
    for(shoe of shoes) {
        const shoeCard = `
        <div class="card" style="width: 240;">
            <div class="card-body">
            <h5 class="card-title">${shoe.gyarto}</h5>
            <p class="card-text">${shoe.leiras}</p>
            <p class="card-size">${shoe.meret}</p>
            <p class="card-price">${shoe.ar}</p>
            <a href="${shoe.honlap}" class="btn btn-primary">A gyártó honlapja</a>
            </div>
        </div>
        `;
        document.querySelector('.shoe-card-container').innerHTML += shoeCard;
    }
    document.querySelector('#fetch-shoes').innerHTML = 'Az eddig elmentett cipők elrejtese';
    isShown = true;

    //document.getElementById("shoes-list-components").innerHTML = shoesHTML;
}
document.getElementbyId('create-shoes').onsubmit = async function(event) {
    /*
    A kiírás része:
    */
   event.preventDefault();
   const tipus = event.target.elements.tipus.value;
   const meret = event.target.elements.meret.value;
   const gyarto = event.target.elements.gyarto.value;
   const leiras = event.target.elements.leiras.value;
   const honlap = event.target.elements.honlap.value;
   const ar = event.target.elements.ar.value;
   console.log(`Az új cipő: ${tipus} ${meret} ${gyarto} ${leiras} ${honlap} ${ar}`);
   
    if( res.ok ){
        fetchAndRenderShoes();
    } else {
        console.log("Hiba történt");
        alert("A szerver a kérést nem tudta feldolgozni");
    }
}