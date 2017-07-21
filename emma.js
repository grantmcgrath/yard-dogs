emma.js

// replace with legit fetch
// testing only
fetch("https://opendata.arcgis.com/datasets/124c2187da8c41c59bde04fa67eb2872_0.geojson").then(function(response) {
  response.json().then(function(data) {
      console.log(data);
      return data;
    })
    .then(function(){ //don't run till data loads
      // insert map function here

      // string literal template

      for (var i = 0; i < 16; i++) {
        var restResult = `
      <div class="result">
        <h2>${data[i].features.properties.Name[i]}</h2>
        <p>${data[i].features.properties.PhoneNumber[i]}</p>
        <p>${data[i].features.properties.Address1[i]}</p>
        <p>${data[i].features.properties.City[i]}, NC ${data[i].features.properties.PostalCode}</p>
      </div>
      // `;

        <h3>${data[i].features.properties.Inspections.score}</h3>


        // appends string to results box. place inside loop/map
        document.querySelector("#results").innerHTML += restResult;
      }
    )
})


// Inserts the template into the results section.
  document.getElementById('searchButton').addEventListener('click', function search() {
  // moves search box up
  document.getElementById("emptySection").style.height = "0";
  // displays footer
  document.getElementById("footer").style.display = "block";
  // makes box for diplaying results
  document.getElementById("results").style.display = "flex";
  // this line clears the search box
  document.querySelector("#results").innerHTML = '';
  return;
});
