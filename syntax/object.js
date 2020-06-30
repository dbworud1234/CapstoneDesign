var members = ['YJK', 'LJH', 'LDH'];  // 배열은 []
console.log(members[1]);
var i = 0;
while(i < members.length){
  console.log('array loop ', members[i]);
  i = i + 1;
}

var roles = {  // 객체는 {}
  'programmer':'YJK',  // 콜론(:) 기준으로 왼쪽은 key, 오른쪽은 value
  'designer' : 'LJH',
  'manager' : 'LDH'
}
console.log(roles.designer);
console.log(roles['designer']);

for(var name in roles){  // name을 n이라고 해도 됨.
  console.log('object => ', name, 'value => ', roles[name]);
}
