import crypto from 'crypto';

// CreateHash()
//const hash = crypto.createHash('sha256');
//ash.update('password421');
//console.log(hash.digest('hex'));



//randomBytes()
//crypto.randomBytes(16, (err, buff) => {
//    if (err) throw err;
  //  console.log(buff.toString('hex'));
///});

// createCipheriv && createDecipheriv

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm,key,iv);
let encrypted = cipher.update('Secret message, dont tell nobody', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);

const decipher = crypto.createDecipheriv(algorithm,key,iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);

