const request = require('request');
const fs = require('fs');


const fetcher = function(url, localFilePath) {
  if (url && localFilePath) {
    request(url, (error, response, body) => {
      if (!error) {
        const fileContent = body;
        fs.writeFile(localFilePath, fileContent, ()=>{
          console.log("downloaded sucessfully");
        });
      }
    });
  } else {
    console.log("parameters are not provided");
  }
};


const url = process.argv[2];
const path = process.argv[3];


fetcher(url, path);