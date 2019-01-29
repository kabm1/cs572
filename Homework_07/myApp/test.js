const crypto = require('crypto');

const algorithm = 'aes256';
    const password = 'asaadsaad';
    
    const decipher = crypto.createDecipher(algorithm, password);
    const encrypted = 'ba12e76147f0f251b3a2975f7acaf446a86be1b4e2a67a5d51d62f7bfbed5c03';
   const decrypted = decipher.update(encrypted, 'hex', 'utf8') + decipher.final('utf8');
   console.log(decrypted);