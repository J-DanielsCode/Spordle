
export async function fetchGuessContinent(guessNationality) {

    try {
        const guessCountryName = guessNationality;

        // First query: get the continent of the searchResult nationality
        const guessQuery = `
            query {
                countries(filter: { name: { eq: "${guessCountryName}" } }) {
                    name
                    code
                    continent {
                        name
                    }
                }
            }
        `;
        
        const response = await fetch("https://countries.trevorblades.com/graphql", { // this response needs to only give the continent, to then use to do another query which lists all countries within the continent.
            //find the continent of the target compare to continent of searchResult
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: guessQuery }),
        });

        const data = await response.json();

        const continent = data.data.countries[0]?.continent.name;

        if(!continent) {
            throw new Error(`No continent found for ${guessCountryName}`);
        }


        return continent;
    } catch (err) {
        console.error("Error fetching the nationality/continent:", err);
        return null;
    }
}

export async function fetchTargetContinent(targetNationality) {

    try {
        const targetCountryName = targetNationality;

        // First query: get the continent of the searchResult nationality

        const targetQuery = `
            query {
                countries(filter: { name: { eq: "${targetCountryName}" } }) {
                    name
                    code
                    continent {
                        name
                    }
                }
            }
        `;
        
        const response = await fetch("https://countries.trevorblades.com/graphql", { // this response needs to only give the continent, to then use to do another query which lists all countries within the continent.
            //find the continent of the target compare to continent of searchResult
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: targetQuery }),
        });

        const data = await response.json();
        const continent = data.data.countries[0]?.continent.name;

        if(!continent) {
            throw new Error(`No continent found for ${targetCountryName}`);
        }

        return continent;
    } catch (err) {
        console.error("Error fetching nationality/continent:", err);
        return null;
    }
}

// fetchGuessContinent({nationality: "Denmark"})
//   .then(console.log)
//   .catch(console.error);

// fetchTargetContinent({nationality: "United States"})
//     .then(console.log)
//     .catch(console.error);


//to test locally run: node --experimental-modules src/helpers/nationalityRequest.js