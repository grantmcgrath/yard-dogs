let results = document.getElementById("results");
let retData = {};
let restResult = '';


// replace with legit fetch
// testing only
fetch("https://opendata.arcgis.com/datasets/124c2187da8c41c59bde04fa67eb2872_0.geojson").then(function(response) {
  response.json().then(function(data) {
      console.log(data);
      retData = data;
      return data;
    })
    // .then(function(data){
    //
    //   }
    // )
})


// Inserts the template into the results section.
document.getElementById('searchButton').addEventListener('click', function search() {
  // moves search box up
  document.getElementById("emptySection").style.height = "0";
  // displays footer
  document.getElementById("footer").style.display = "block";
  // makes box for diplaying results
  results.style.display = "flex";
  // this line clears the search box
  results.innerHTML = '';
  console.log(retData);
  for (var i = 0; i < 16; i++) {
    var restResult = `
      <div class="result">
      <h2>${retData.features[i].properties.Name}</h2>
      <img src="images/healthGrade.png" alt="Placeholder for health grade data">
      <p>${retData.features[i].properties.Address1},${retData.features[i].properties.City}, NC ${retData.features[i].properties.PostalCode},${retData.features[i].properties.PhoneNumber}</p>

    </div>`;
    console.log(restResult);
    //
    // // <h3>${data[i].features.properties.Inspections.score}</h3>
    //
    //
    // // appends string to results box. place inside loop/map
    results.innerHTML += restResult;
    }
});
