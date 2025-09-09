import { sampleData } from "../test-data/sample-data.js";


const query = `
  query {
    continent(code: "EU") {
      name
      countries {
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
