const https = require("https");

https
  .get("https://api.opensea.io/api/v1/collection/CryptoPunks/stats", (resp) => {
    let data = "";

    // A chunk of data has been received.
    resp.on("data", (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on("end", () => {
      let objData = JSON.parse(data);
      console.log("          ***************************************");
      console.log("          |  All Collections as the Following:  |");
      console.log("          ***************************************");
      console.log(objData);
      //console.log(Object.keys(objData));
    });
  })
  .on("error", (err) => {
    console.log("Error: " + err.message);
  });
