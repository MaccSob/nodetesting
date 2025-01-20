import url from 'url';


const urlString = 'https://www.google.com/search?q=free+tacos';

// URL Obj - all url details basically
const urlObj = new URL(urlString);

console.log(urlObj);


// format() -  puts url in string form

console.log(url.format(urlObj));

// import.meta.url - file URL

console.log(import.meta.url);

// fileURLtoPath() 

console.log(url.fileURLToPath(import.meta.url));


// adding/deleting qs
const params = new URLSearchParams(urlObj.search);
console.log(params.get('q'));
params.append('limit', '5');
console.log(params);
params.delete('limit');
console.log(params);

