

fetch("https://opendata.arcgis.com/datasets/124c2187da8c41c59bde04fa67eb2872_0.geojson").then(function(response) {
  response.json().then(function(data) {
    console.log(data);
    return data;
  })
  .then(
    // Inserts the template into the results section.
    function search() {
      document.getElementById("emptySection").style.height = "0";
      document.getElementById("footer").style.display = "block";
      document.getElementById("results").style.display = "flex";
      document.querySelector("#results").innerHTML = '';
for (var i = 0; i < array.length; i++) {
  array[i]
}
      var restResult = `
      <div class="result">
        <h2>${restaurants.properties.Name}</h2>
        <p>${restaurants.properties.PhoneNumber}</p>
        <p>${restaurants.properties.Address1}</p>
        <p>${restaurants.properties.City}, NC ${restaurants.properties.PostalCode}</p>
        <h3>${restaurants.properties.Inspections.score}</h3>
      </div>
      `;


      document.querySelector("#results").innerHTML += restResult;
    }
  )
})
