// Init using expression literal
const re = /ab+c/;

// or using constructor
const re2 = new RegExp('ab+c');

const arr = re.exec("abcabcabc");

console.log(arr);

const re3 = /(\w+)\s(\w+)/; // "word word"

const name = 'John Doe';

let newName = name.replace(re3, "$2, $1");

console.log(newName);

const list = "John Doe; Jane Doe; Spiderman";

const sep = /;\s*/; // "; "

const names = list.split(sep);

console.log(names);