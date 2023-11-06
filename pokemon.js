document.addEventListener("DOMContentLoaded", () => {
    const apiDataList = document.getElementById("api-data-list");
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.hasOwnProperty('results')) {
                const pokemonList = data.results;

                const container = document.createElement("div");
                container.className = "container-fluid text-center";

                for (let i = 0; i < pokemonList.length; i += 4) {
                    const row = document.createElement("div");
                    row.className = "row";
                    for (let j = i; j < i+4; j++) {
                        const pokemon = pokemonList[j];
                        const colDiv = document.createElement("div");
                        colDiv.className = "col-xl-3 col-md-6 col-sm-6 mb-0";
                        const pokemonHurufBesar = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
                        colDiv.innerHTML = `
                            <div class="card border-primary shadow my-2">
                                <div class="card-body">
                                    <div class="row no-gutters">
                                        <div class="col mr-0">
                                            <div class="h5 mb-2 mr-0 font-weight-bold text-gray-800">${pokemonHurufBesar}</div>
                                            <a href="${pokemon.url}" class="btn btn-primary btn-user">
                                                Detail
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                        row.appendChild(colDiv);
                    }
                    container.appendChild(row);
                }
                apiDataList.appendChild(container);
            }
            
        })
        .catch(error => {
            console.error("Error fetching data: " + error);
        });
});
