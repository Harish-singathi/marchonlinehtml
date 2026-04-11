//function declaration
function f1()//no args function
{
    console.log('hello world');
}
f1();//calling a function


//function with args
function f2(name)
{
    console.log(`my name is ${name}`);
}
f2();//my name is undefined
f2('Harish Varma Singathi');//calling function
    
//function expression
let f3=function()
{
    console.log("function expression");
}
f3();
//arrow functions
let f4=()=>
{
    console.log("arrow function");
}
f4();

//anonymous function
setTimeout(f1(),5000);
   
setTimeout(() => {
    console.log("anonymous function");
}, timeout);