// // ## 1. This

// // 자바스크립트에서 this는 어떤 객체를 가리키는 키워드

// // 이 this가 뭘 가리키는 지는 상황에 따라서 바뀐다. 

// // 하지만 확실한 건, this는 함수를 호출한 객체라는 것

// javascript
// 1. 전역 위치에서 this

// console.log(this)
// // window(브라우저 정보를 가지고 있는 전역 객체)


// 2. 함수 내부에서 this

// const main() {
// 	console.log(this) 
//   //window 객체가 나온다.
  
// }
// main()
// //함수를 전역에서 실행시키면, main() === window.main()과 같다.
// //this는 함수를 호출한 객체이니, window가 나오는 것

// 3. 'use strict'를 쓴다면 ? 
// 'use strict'
  
// const main() {
// 	console.log(this) 
//   //undefined
  
// }
// main()


// 4. 객체에서의 this

// const object = {
//   name : '별코딩',
//   main : function() {
//    	console.log(this); 
//     // {name : '별코딩', main : f}
//     //함수 안에 this는 함수를 호출한 객체가 된다.
//     //지금 main이라는 함수를 호출한 건 object라는 객체니까 object가 나오는 것
//   }
// }

// BUT !!
  
// const main2 = object.main;
// main2()

// //이렇게 하면 다시 window가 뜬다 왜냐면, 이제 main2는 전역 공간에 있기에 전역 공간의 객체는 window다. 그래서 main2라는 함수를 호출한 객체는 window라서 window가 콘솔에 찍힘

// 5. 이중객체에서의 this

// const main = () => {
//  	console.log(this) 
//   //{name:'작은 별코딩', main: f}
// }

// const object = {
//  	name : '별코딩',
//   	smallObject : {
//      name: '작은 별코딩',
//      main
//     }
// }

// object.smallObject.main();


