const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('../prd2_presentation.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('../parsed2.txt', data.text);
    console.log('parsed2.txt written with ' + data.text.length + ' chars');
}).catch(function(error) {
    console.error(error);
});
