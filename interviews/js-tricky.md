```js
function myFunction() {
    setTimeout(()=>console.log(`settime===` , x),0);
    console.log(`x2 `, x );
    var x = 40;
    console.log('x3 ', x); 
}

x = 30;
myFunction()

console.log('x4 ' ,x)

/*
	Output
	x2  undefined
	x3  40
	x4  30
	settime=== 40
*/
```
