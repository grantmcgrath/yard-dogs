let transformedData;

fetch("https://opendata.arcgis.com/datasets/124c2187da8c41c59bde04fa67eb2872_0.geojson").then(function(response){
  response.json().then(function(data){
    //console.log(data);
    transformedData = data.features.reduce((acc, restaurant) => {
      // add the rest. to the acc
      acc[restaurant.properties.HSISID] = restaurant.properties;
      // inspections
      acc[restaurant.properties.HSISID].inspections = [];
      return acc;
    }, {});

    // now go get our inspection data.
    fetch("https://opendata.arcgis.com/datasets/ebe3ae7f76954fad81411612d7c4fb17_1.geojson")
    .then(function(response){
      if(response.status === 200){
        //response.json().then(inspections => console.log(inspections.features[0].properties))

        //response.json().then(inspections => console.log(inspections.features.filter(insp => insp.properties.HSISID === "04092011278")))
        response.json().then(inspections => {
          inspections.features.forEach(function(insp){
            let hid = insp.properties.HSISID;
            let restaurant = transformedData[hid];
            if(!restaurant) return;
            transformedData[hid].inspections.push(insp.properties);
          })
        })

        console.log(transformedData);
      }
    })

  });
});


console.log(Date.now() - 33696000);
