const fs = require('fs');


fs.readFile('./package.json', 'utf-8', (err, data) => {
      if(err) {
            console.error(`Error: ${err}`);
      }

      console.log(data);
})