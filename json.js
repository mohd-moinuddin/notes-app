const fs = require('fs');



   // Covert JavaScript object into JSON string
//    const bookJSON = JSON.stringify(book)

//    // Covert JSON string into object
//    const bookObject = JSON.parse(bookJSON)
//    console.log(bookObject.title) 



   const dataBuffer = fs.readFileSync('json.json');
   const dataJson   = dataBuffer.toString();
   const user       = JSON.parse(dataJson);

   user.title   = 'Introduction to algorithm',
   user.author  = 'CLRS'

   const userJson = JSON.stringify(user)
   fs.writeFileSync('json.json',userJson);
   