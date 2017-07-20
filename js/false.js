

fetch("https://opendata.arcgis.com/datasets/124c2187da8c41c59bde04fa67eb2872_0.geojson").then(function(response){
  response.json().then(function(data){
    console.log(data);
    return data;
  })
});

const template = `
  <div class="result">
    <h2>${}</h2>
  </div>
`;

// Inserts the template into the results section.
document.querySelector("#results").innerHTML = template
