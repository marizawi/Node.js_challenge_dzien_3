const fs = require('fs');
const crypto = require('crypto');

const result = '4f7ae6569b55cb6275423ca1cdf31475e607da1d5204c110a58fb480c96e6eca';

process.argv.forEach((val) => {
    fs.readFile(val, 'utf8', (err, data) => {
        if (err === null){
            const hash = crypto.createHmac('sha256', data)
                .digest('hex');
            console.log(hash);
        } else {
            console.log('Błąd podczas odczytu pliku!', err);
        }
    });
})
