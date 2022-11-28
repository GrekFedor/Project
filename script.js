alert("Hello world"); // alert "Hello world

let age = prompt('Скільки вам років?', 18);

alert(`Вам ${age} років!`); // prompt   

let isBoss = confirm("Ви начальник?");

alert( isBoss ); // confirm

let one = 50;
let two = "20";
let three = 5;

alert( one + two ** three ); // alert matematical solution

let arr = [one,two,three];
console.log( arr ); // console.log

let year = prompt('В якому році була опублікована Windows 95', '1995');

if (year == 1995) alert( 'Вiрно!' ); // if

let ones = 9;
while ( ones ) {
    alert( ones ); 
    ones--
} // while

function showMessage() {
    let message = "Привіт, я Федiр";
  
    alert( message );
  }
  
  showMessage();
  
  alert( message ); // function