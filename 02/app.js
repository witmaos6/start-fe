console.log('app');


// Create
var todos =['운동']
var todo='게임';

todos.push(todo);
console.log(todos);

// Read
todos.forEach(function(todo){
    console.log(tood);
});

//update
var todos = ['운동', '게임'];
var updateTodo = '게임';
var updateIndex = todos.findIndex(function(todo) {
    return todo === updateTodo;
  });
todos[updateIndex] = '공부';
console.log(todos);

// delete
var todos = ['운동', '공부', '목욕'];
var deleteTodo = '공부';
var deleteIndex = todos.findIndex(function(todo) {
  return todo === deleteTodo;
});
todos.splice(deleteIndex, 1);
console.log(todos);

var inMan=true;
if(isMan){
    console.log('1');
} 
else if(inMan && inHero){

}
else{
    console.log('2');
}

alert('hi hi');

function test() {
    console.log('test()');
  }
  
  var id = setTimeout(test, 1000); //1초후 1번실행
  
  var id = setInterval(test, 1000); //1초마다 계속 실행
  
  //setInterval 보다 나은 방법
  function test() {
    console.log('test()');
    setTimeout(test, 1000);
  }

  function sum(a,b){
      return a+b;
  }
  console.log(sum(1,2));

  var car = {
    year: '2020',
    starting: function() {
      console.log('starting..');
    },
  };
  
  car.starting();

  (function(){
      var a='a';
      console.log(a);
  })();

  function sum(x, y) {
    if (!y) y = 1;
    console.log(x + y);
  }
  console.log(sum(3));
  console.log(sum(3,2));