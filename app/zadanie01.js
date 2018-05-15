const MY_PWD_HASH = '5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e';

const crypto = require('crypto');

const algorithms = ['sha256', 'sha512', 'md5', 'rmd160'];

const passwords = ['??TegoHasła', 'CodersLab', 'Node.js Szyfruje Pliki', 'Zaźółć Gęślą Jaźń', 'Moje Haslo 1@3!', '111#$((@)n','Dzisiaj Szyfruje 83'];

for (let i = 0; i < algorithms.length; i++) {
    for (let j = 0; j < passwords.length; j++) {
        const hash = crypto.createHmac(algorithms[i], passwords[j])
        .digest('hex');
        const result = hash === MY_PWD_HASH ? `${algorithms[i]} + ${passwords[j]} = ${hash}` : 'keep trying';
    console.log(result)
    }
}