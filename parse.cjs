const fs = require('fs');
const pdf = require('pdf-parse');
const dataBuffer = fs.readFileSync('c:/Users/blzfa/OneDrive/Desktop/fazti/prd presentation.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('c:/Users/blzfa/OneDrive/Desktop/fazti/parsed.txt', data.text);
}).catch(err => {
    console.error(err);
});
