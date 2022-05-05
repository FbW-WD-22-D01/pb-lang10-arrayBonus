const user = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'l'];
const auswahl = [];
const doppelt = [];

auswahl.push(user[Math.floor(Math.random()*user.length)]);

let name2 = user[Math.floor(Math.random()*user.length)];
let name3 = user[Math.floor(Math.random()*user.length)];
let name4 = user[Math.floor(Math.random()*user.length)];
let name5 = user[Math.floor(Math.random()*user.length)];

auswahl.includes(name2) ? doppelt.push(name2) : auswahl.push(name2);
auswahl.includes(name3) ? doppelt.push(name3) : auswahl.push(name3);
auswahl.includes(name4) ? doppelt.push(name4) : auswahl.push(name4);
auswahl.includes(name5) ? doppelt.push(name5) : auswahl.push(name5);

console.log('AUSWAHL: ', auswahl.sort());
console.log('DOPPELT: ', doppelt.sort());

