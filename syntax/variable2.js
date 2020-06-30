var name = 'YJK';
var letter = 'Dear '+name+'\n\nhttps://www.youtube.com/w '+name+' atch?v=De9Cttb_9dQ&list=PLfs-6fk '+name+' BBhmh17wuQpoO7ZUhueyLa4wSY& '+name+' index=10';
console.log(letter); // \n 이거 불편하니까 template literal 씀.

var letter = `Dear ${name}

https://www.youtube.com/w ${name} atch?v=De9Cttb_9dQ&list=PLfs-6fk ${name} BBhmh17wuQpoO7ZUhueyLa4wSY& ${name} index=10`;

console.log(letter);
