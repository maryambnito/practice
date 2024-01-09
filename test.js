// function givemeusername(){
//     const username=document.getElementById('username').value
//     const password=document.getElementById('password').value
//     console.log(password)
// }
// function checkradiobutton(){
//     const apple=document.getElementById('apple');
//     const banana=document.getElementById('banana');
// if(apple.checked){
//     console.log('apple');
// }
// else if(banana.checked){
//     console.log('banana');

// }
// }
// function selectedVal(){
//     const val1=document.getElementById('selectId').value;
//     console.log(val1);
// }
// function validUsername(){
//     const username=document.getElementById("username").value
//     const pattern=/^[A-Za-z][A-Za-z0-9 -]*$/
//      if(pattern.test(username)){
//         alert('valid username')
//     }
//     else
//      alert('invalid username')

// }
// function testRegex(){
//     let json='{"age":24,"name":"marya","username":"admin"}'
    
//     let obj=JSON.parse(json)
//     if(!obj.username)
//     alert("error")
// else 
// alert("hi `${username}`")
//     console.log(obj)
// }
//primitive type
// let num1=10
// let num2=num1
// function func1(num){
// num++
// console.log(num)
// }
// func1(num1)
// console.log(num1,num2)
//reference type
let num1={value:10}
let num2=num1
num2.value=20
console.log(num1,num2)
// (favoritecolor = function(color){
// console.log(color)
// } )()
// favoritecolor("yellow")