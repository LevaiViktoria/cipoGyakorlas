console.log("Beléptem");
document.getElementById('fetch-shoes').onclick=fetchAndRenderShoes;

async function fetchAndRenderShoes() {
    const response = await fetch('/adatok/adatok.json');
    const shoes = await response.json();

    let shoesHTML = "<h1>Cipők</h1>";
    for( 0 of shoes ) {
        shoesHTML += `<div class="card" style="width: 240;">
                        <img class="card-img-top" src="###" alt="###">
                        <div class="card-body">
                        <h5 class="card-title">###</h5>
                        <p class="card-text">###</p>
                        <a href="#" class="btn btn-primary">A gyártó honlapja</a>
                         </div>
                    </div>`;
    }

    document.getElementById("shoes-list-components").innerHTML = shoesHTML;
}
