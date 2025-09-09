import { sampleData } from "../test-data/sample-data.js";

export async function fetchNationality(searchResults) {

    const countryName = searchResults.nationality;

    const query = `
        query {
            countries(filter: { name: { eq: "${countryName}" } }) {
                name
                code
                continent {
                    name
                }
            }
        }
  `;

    fetch("https://countries.trevorblades.com/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log("Countries in Europe:", data.data.continent.countries);
        })
        .catch((err) => {
            console.error("Error fetching countries:", err);
        });  

    
  const response = await fetch("https://countries.trevorblades.com/", { // this response needs to only give the continent, to then use to do another query which lists all countries within the continent.
    //if the target country is in the list then it is close.
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  return response.json();
}


