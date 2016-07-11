/*Create a file called hello-world.js . In it, write a simple node program that outputs "Hello World!" to the console.

Add an instruction to your program that will output "Hello World Again!!" 10 seconds after the program was run.

Save, commit and push.*/


console.log("Hellow World!");

setTimeout(function() {  
    console.log("hello world again!!");
    
}, 10000);