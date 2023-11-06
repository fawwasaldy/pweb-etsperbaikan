document.addEventListener("DOMContentLoaded", () => {
    const apiDataList = document.getElementById("api-data-list");
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.hasOwnProperty('results')) {
                const pokemonList = data.results;
                const listItem = document.createElement("div");
                pokemonList.forEach(pokemon => {
                    listItem.className = "col-xl-3 col-md-3 mb-4";
                    listItem.innerHTML += `
                    <div class="card o-hidden border-0 shadow-lg my-5">
                        <div class="card-body">
                            <div class="row no-gutters container text-center">
                                <div class="col mr-2">
                                    <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">${pokemon.name}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
                    apiDataList.appendChild(listItem);
                });
            }
            
        })
        .catch(error => {
            console.error("Error fetching data: " + error);
        });
});
